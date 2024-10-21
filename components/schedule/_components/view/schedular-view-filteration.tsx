"use client";

import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Calendar, CalendarDaysIcon } from "lucide-react";
import { BsCalendarMonth, BsCalendarWeek } from "react-icons/bs";

import AddEventModal from "../../_modals/add-event-modal";
import DailyView from "./day/daily-view";
import MonthView from "./month/month-view";
import WeeklyView from "./week/week-view";
import { useModalContext } from "@/providers/modal-provider";
import { ClassNames, CustomComponents, Views } from "@/types/index";

// Animation settings for Framer Motion
const animationConfig = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, type: "spring", stiffness: 250 },
};

export default function SchedulerViewFilteration({
  views = {
    views: ["day", "week", "month"],
    mobileViews: ["day"],
  },
  CustomComponents,

  classNames,
}: {
  views?: Views;
  CustomComponents?: CustomComponents;

  classNames?: ClassNames;
}) {
  const { showModal: showAddEventModal } = useModalContext();

  const [clientSide, setClientSide] = React.useState(false);

  useEffect(() => {
    setClientSide(true);
  }, []);

  const [isMobile, setIsMobile] = React.useState(
    clientSide ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    if (!clientSide) return;
    setIsMobile(window.innerWidth <= 768);
    function handleResize() {
      if (window && window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    window && window.addEventListener("resize", handleResize);

    return () => window && window.removeEventListener("resize", handleResize);
  }, [clientSide]);

  function handleAddEvent(selectedDay?: number) {
    showAddEventModal({
      title:
        CustomComponents?.CustomEventModal?.CustomAddEventModal?.title ||
        "Add Event",
      body: (
        <AddEventModal
          CustomAddEventModal={
            CustomComponents?.CustomEventModal?.CustomAddEventModal?.CustomForm
          }
        />
      ),
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

  const viewsSelector = isMobile ? views?.mobileViews : views?.views;
  return (
   
    <div className="flex w-full flex-col p-3">
      <div className="flex w-full">
        <div className="dayly-weekly-monthly-selection relative w-full">
          <Tabs
            classNames={{ ...classNames?.tabs }}
            aria-label="Options"
            color="primary"
            variant="solid"
          >
            {viewsSelector?.includes("day") && (
              <Tab
                key="day"
                title={
                  CustomComponents?.customTabs?.CustomDayTab ? (
                    CustomComponents.customTabs.CustomDayTab
                  ) : (
                    <div className="flex items-center space-x-2">
                      <CalendarDaysIcon size={15} />
                      <span>Day</span>
                    </div>
                  )
                }
              >
                <motion.div {...animationConfig}>
                  <DailyView
                    classNames={classNames?.buttons}
                    prevButton={
                      CustomComponents?.customButtons?.CustomPrevButton
                    }
                    nextButton={
                      CustomComponents?.customButtons?.CustomNextButton
                    }
                    CustomEventComponent={
                      CustomComponents?.CustomEventComponent
                    }
                    CustomEventModal={CustomComponents?.CustomEventModal}
                  />
                </motion.div>
              </Tab>
            )}
            {viewsSelector?.includes("week") && (
              <Tab
                key="week"
                title={
                  CustomComponents?.customTabs?.CustomWeekTab ? (
                    CustomComponents.customTabs.CustomWeekTab
                  ) : (
                    <div className="flex items-center space-x-2">
                      <BsCalendarWeek />
                      <span>Week</span>
                    </div>
                  )
                }
              >
                <motion.div {...animationConfig}>
                  <WeeklyView
                    classNames={classNames?.buttons}
                    prevButton={
                      CustomComponents?.customButtons?.CustomPrevButton
                    }
                    nextButton={
                      CustomComponents?.customButtons?.CustomNextButton
                    }
                    CustomEventComponent={
                      CustomComponents?.CustomEventComponent
                    }
                    CustomEventModal={CustomComponents?.CustomEventModal}
                  />
                </motion.div>
              </Tab>
            )}
            {viewsSelector?.includes("month") && (
              <Tab
                key="month"
                title={
                  CustomComponents?.customTabs?.CustomMonthTab ? (
                    CustomComponents.customTabs.CustomMonthTab
                  ) : (
                    <div className="flex items-center space-x-2">
                      <BsCalendarMonth />
                      <span>Month</span>
                    </div>
                  )
                }
              >
                <motion.div {...animationConfig}>
                  <MonthView
                    classNames={classNames?.buttons}
                    prevButton={
                      CustomComponents?.customButtons?.CustomPrevButton
                    }
                    nextButton={
                      CustomComponents?.customButtons?.CustomNextButton
                    }
                    CustomEventComponent={
                      CustomComponents?.CustomEventComponent
                    }
                    CustomEventModal={CustomComponents?.CustomEventModal}
                  />
                </motion.div>
              </Tab>
            )}
          </Tabs>

          {
            // Add custom button
            CustomComponents?.customButtons?.CustomAddEventButton ? (
              <div
                onClick={() => handleAddEvent()}
                className="absolute top-0 right-0"
              >
                {CustomComponents?.customButtons.CustomAddEventButton}
              </div>
            ) : (
              <Button
                onClick={() => handleAddEvent()}
                className={
                  "absolute top-0 right-0 " + classNames?.buttons?.addEvent
                }
                color="primary"
                startContent={<Calendar />}
              >
                Add Event
              </Button>
            )
          }
        </div>
      </div>
    </div>
   
  );
}
