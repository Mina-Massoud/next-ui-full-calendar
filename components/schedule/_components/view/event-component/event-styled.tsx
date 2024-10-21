"use client";

import React from "react";
import { Chip } from "@nextui-org/chip";
import { useModalContext } from "@/providers/modal-provider";
import AddEventModal from "@/components/schedule/_modals/add-event-modal";
import { Event, CustomEventModal } from "@/types";
import { TrashIcon } from "lucide-react";
import { useScheduler } from "@/app";
import { motion } from "framer-motion";
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
  CustomEventComponent?: React.FC<Event>;
}

export default function EventStyled({
  event,
  CustomEventModal,
}: {
  event: EventStyledProps;
  CustomEventModal?: CustomEventModal;
}) {
  const { showModal: showEventModal } = useModalContext();

  const { handlers } = useScheduler();
  // Handler function
  function handleEditEvent(event: Event) {
    // console.log("Edit event", event);

    showEventModal({
      title: event?.title,
      body: (
        <AddEventModal
          CustomAddEventModal={
            CustomEventModal?.CustomAddEventModal?.CustomForm
          }
        />
      ),
      getter: async () => {
        return { ...event };
      },
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      key={event?.id}
      className="w-full relative use-automation-zoom-in cursor-pointer border border-default-400/60 rounded-lg  flex flex-col flex-grow "
    >
      <Chip
        onClickCapture={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
          handlers.handleDeleteEvent(event?.id);
        }}
        color="danger"
        variant="solid"
        classNames={{ content: "max-w-fit min-w-0 p-1" }}
        className="absolute z-50 right-0 top-[-5px]"
      >
        <TrashIcon size={12} />
      </Chip>
      {event.CustomEventComponent ? (
        <div
          onClickCapture={(e) => {
            e.stopPropagation(); // Stop event from propagating to parent
            handleEditEvent({
              id: event?.id,
              title: event?.title,
              startDate: event?.startDate,
              endDate: event?.endDate,
              description: event?.description,
              variant: event?.variant,
            });
          }}
        >
          <event.CustomEventComponent {...event} />
        </div>
      ) : (
        <Chip
          onClickCapture={(e) => {
            e.stopPropagation(); // Stop event from propagating to parent
            handleEditEvent({
              id: event?.id,
              title: event?.title,
              startDate: event?.startDate,
              endDate: event?.endDate,
              description: event?.description,
              variant: event?.variant,
            });
          }}
          variant="flat"
          color={event?.variant}
          classNames={{ content: "p-0" }}
          className={`min-w-full items-start p-0 flex-grow flex-col flex ${event?.minmized ? "h-full" : "min-h-fit p-1"} rounded-md`}
        >
          <div
            className={`flex ${event?.minmized ? "p-0" : "p-1"} flex-col flex-grow px-1 rounded-md  items-start w-full`}
          >
            <h1
              className={`${event?.minmized && "text-[0.7rem] p-0 px-1"} font-semibold line-clamp-1`}
            >
              {event?.title}
            </h1>

            <p className="text-[0.65rem]">{event?.description}</p>
            {!event?.minmized && (
              <div className="flex justify-between w-full">
                <p className="text-sm">{formatDate(event?.startDate)}</p>
                <p className="text-sm">-</p>
                <p className="text-sm">{formatDate(event?.endDate)}</p>
              </div>
            )}
          </div>
        </Chip>
      )}
    </motion.div>
  );
}
