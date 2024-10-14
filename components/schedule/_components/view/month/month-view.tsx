"use client";
import { Card } from "@nextui-org/card";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Event, useScheduler } from "@/providers/schedular-provider";
import { Button } from "@nextui-org/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Chip } from "@nextui-org/chip";
import EventStyled from "../event-component/event-styled";
import { useModalContext } from "@/providers/modal-provider";
import AddEventModal from "@/components/site/global/modals/events/add-event-modal";
import ShowMoreEventsModal from "@/components/site/global/modals/events/show-more-events-modal";
import clsx from "clsx";

// Helper function to get the days in a given month and year

export default function MonthView() {
  const daysOfWeek = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const { getters, state } = useScheduler();
  const { showModal } = useModalContext();

  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = getters.getDaysInMonth(
    currentDate.getMonth(),
    currentDate.getFullYear()
  );

  const handlePrevMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(newDate);
  };

  function handleAddEvent(selectedDay?: number) {
    showModal({
      title: "Add Event",
      body: <AddEventModal />,
      getter: async () => {
        const startDate = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          selectedDay ?? 1, // Use 1 if selectedDay is undefined or null
          0,
          0,
          0,
          0
        );
        const endDate = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          selectedDay ?? 1,
          23,
          59,
          59,
          999
        );
        return { startDate, endDate };
      },
    });
  }

  function handleShowMoreEvents(dayEvents?: Event[]) {
    showModal({
      title:
        dayEvents &&
        dayEvents?.length &&
        dayEvents[0]?.startDate.toDateString(),
      body: <ShowMoreEventsModal />,
      getter: async () => {
        return { dayEvents };
      },
    });
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  useEffect(() => {
    console.log("Updated state:", state);
  }, [state]);

  return (
    <div>
      <div className="flex flex-col mb-4">
        <motion.h2
          key={currentDate.getMonth()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl my-5 tracking-tighter font-bold"
        >
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </motion.h2>
        <div className="flex gap-3">
          <Button startContent={<ArrowLeft />} onClick={handlePrevMonth}>
            Previous
          </Button>

          <Button startContent={<ArrowRight />} onClick={handleNextMonth}>
            Next
          </Button>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={currentDate.getMonth()}
          className="grid grid-cols-7 gap-1 sm:gap-2"
        >
          {daysOfWeek.map((day, idx) => (
            <div
              key={idx}
              className="text-left my-8 text-4xl tracking-tighter font-medium"
            >
              {day}
            </div>
          ))}

          {daysInMonth.map((dayObj) => {
            const dayEvents = getters.getEventsForDay(dayObj.day, currentDate); // Get events for this day

            return (
              <motion.div
                className=" hover:z-50 border-none h-[150px] rounded group flex flex-col"
                key={dayObj.day}
                variants={itemVariants}
              >
                <Card
                  isPressable
                  className="shadow-md  relative flex p-4 border border-default-100 h-full"
                  onClick={() => handleAddEvent(dayObj.day)}
                >
                  <div className={clsx(
                    'font-semibold text-3xl mb-1'
                    , dayEvents.length > 0 ? 'text-primary-600' : 'text-muted-foreground'
                  )}>
                    {dayObj.day}
                  </div>
                  <div className="flex-grow flex flex-col gap-2  w-full overflow-hidden">
                    {dayEvents?.length > 0 && (
                      <EventStyled minmized {...dayEvents[0]} />
                    )}
                    {dayEvents.length > 1 && (
                      <Chip
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShowMoreEvents(dayEvents);
                        }}
                        variant="flat"
                        className="hover:bg-default-200 absolute right-2 text-xs top-2 transition duration-300 "
                      >
                        {dayEvents.length > 1
                          ? `+${dayEvents.length - 1}`
                          : " "}
                      </Chip>
                    )}
                  </div>

                  {/* Hover Text */}
                  {dayEvents.length === 0 && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white tracking-tighter text-lg font-semibold">
                        Add Event
                      </span>
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
