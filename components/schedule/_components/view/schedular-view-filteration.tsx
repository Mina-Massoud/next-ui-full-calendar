"use client";

import { Button, Tab, Tabs } from "@nextui-org/react";
import { Calendar, CalendarDaysIcon, PlusIcon } from "lucide-react";
import React from "react";
import { BsCalendarMonth, BsCalendarWeek } from "react-icons/bs";
import MonthView from "./month/month-view";
import { motion } from "framer-motion";
import WeeklyView from "./week/week-view";
import DailyView from "./day/daily-view";
import { useModalContext } from "@/providers/modal-provider";
import AddEventModal from "@/components/site/global/modals/events/add-event-modal";

// Animation settings for Framer Motion
const animationConfig = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, type: "spring", stiffness: 250 },
};

export default function SchedulerViewFilteration() {
  const { showModal: showAddEventModal } = useModalContext();
  function handleAddEvent(selectedDay?: number) {
    showAddEventModal({
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
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full">
        <div className="dayly-weekly-monthly-selection relative w-full">
          <Tabs
            aria-label="Options"
            classNames={{}}
            color="primary"
            variant="solid"
          >
            <Tab
              key="day"
              className="[data-selected='true']:!bg-red-500"
              title={
                <div className="flex items-center space-x-2">
                  <CalendarDaysIcon size={15} />
                  <span>Day</span>
                </div>
              }
            >
              <motion.div {...animationConfig}>
                <DailyView />
              </motion.div>
            </Tab>

            <Tab
              key="week"
              title={
                <div className="flex items-center space-x-2">
                  <BsCalendarWeek />
                  <span>Week</span>
                </div>
              }
            >
              <motion.div {...animationConfig}>
                <WeeklyView />
              </motion.div>
            </Tab>

            <Tab
              key="month"
              title={
                <div className="flex items-center space-x-2">
                  <BsCalendarMonth />
                  <span>Month</span>
                </div>
              }
            >
              <motion.div {...animationConfig}>
                <MonthView />
              </motion.div>
            </Tab>
          </Tabs>

          <Button
            onClick={() => handleAddEvent()}
            className="absolute top-0 right-0"
            color="primary"
            startContent={<Calendar />}
          >
            Add Event
          </Button>
        </div>
      </div>
    </div>
  );
}
