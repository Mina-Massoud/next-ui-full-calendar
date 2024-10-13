import { Event, Variant, variants } from "@/providers/schedular-provider";
import React, { useMemo } from "react";
import { Chip } from "@nextui-org/react";
import { useModalContext } from "@/providers/modal-provider";
import AddEventModal from "@/components/site/global/modals/events/add-event-modal";

// Function to format date
const formatDate = (date: Date) => {
  return date.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

interface EventStyledProps extends Event {
  minmized?: boolean;
}

export default function EventStyled({
  id,
  title,
  startDate,
  description,
  endDate,
  variant,
  minmized = false,
}: EventStyledProps) {
  const { showModal: showEventModal } = useModalContext();

  // Handler function
  function handleEditEvent(event: Event) {
    console.log("Edit event", event);

    showEventModal({
      title: event?.title,
      body: <AddEventModal />,
      getter: async () => {
        return { ...event };
      },
    });
  }

  return (
    <div
      onClickCapture={(e) => {
        e.stopPropagation(); // Stop event from propagating to parent
        handleEditEvent({
          id,
          title,
          startDate,
          endDate,
          description,
          variant,
        });
      }}
      key={id}
      className="w-full use-automation-zoom-in cursor-pointer border border-default-400/60 rounded-lg overflow-hidden flex flex-col flex-grow "
    >
      <Chip
        variant="flat"
        color={variant}
        classNames={{ content: "p-0" }}
        className={`min-w-full items-start p-0 flex-grow flex-col flex ${minmized ? "h-full" : "min-h-fit p-1"} rounded-md`}
      >
        <div
          className={`flex ${minmized ? "p-0" : "p-1"} flex-col flex-grow px-1 rounded-md  items-start w-full`}
        >
          <h1
            className={`${minmized && "text-[0.7rem] p-0 px-1"} font-semibold line-clamp-1`}
          >
            {title}
          </h1>

          <p className="text-[0.65rem]">{description}</p>
          {!minmized && (
            <div className="flex justify-between w-full">
              <p className="text-sm">{formatDate(startDate)}</p>
              <p className="text-sm">-</p>
              <p className="text-sm">{formatDate(endDate)}</p>
            </div>
          )}
        </div>
      </Chip>
    </div>
  );
}
