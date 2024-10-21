"use client";

// SchedulerContext.tsx
import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";
import { z } from "zod";
import { ModalProvider } from "./modal-provider";
import { Action, Event, Getters, Handlers, SchedulerContextType, startOfWeek } from "@/types/index";
// Define event and state types


interface SchedulerState {
  events: Event[];
}

// Define the variant options
export const variants = [
  "success",
  "primary",
  "default",
  "warning",
  "danger",
] as const;



// Initial state
const initialState: SchedulerState = {
  // events: [
  //   {
  //     id: "1d4c5c73-b5fa-4f67-bb6e-1d5d66cbd57d",
  //     title: "Kickoff Meeting.",
  //     description: "Initial project kickoff with stakeholders.",
  //     startDate: new Date("2024-10-07T09:00:00"),
  //     endDate: new Date("2024-10-07T10:00:00"),
  //     variant: "primary",
  //   },
  //   {
  //     id: "5e1b7b57-0c3e-4d61-bcd7-7fa77b2a58b1",
  //     title: "Client Feedback Session.",
  //     description: "Review client feedback on the recent project.",
  //     startDate: new Date("2024-10-07T11:00:00"),
  //     endDate: new Date("2024-10-07T12:30:00"),
  //     variant: "success",
  //   },
  //   {
  //     id: "e68a77f2-5891-4a6f-9a48-b14e2f9f8141",
  //     title: "Marketing Strategy Meeting.",
  //     description: "Plan the marketing strategy for Q4.",
  //     startDate: new Date("2024-10-08T14:00:00"),
  //     endDate: new Date("2024-10-08T15:30:00"),
  //     variant: "warning",
  //   },
  //   {
  //     id: "0e6e1437-249c-4c81-8c04-4f5a0b3d9a93",
  //     title: "Risk Assessment Review.",
  //     description: "Evaluate potential project risks.",
  //     startDate: new Date("2024-10-09T10:00:00"),
  //     endDate: new Date("2024-10-09T11:30:00"),
  //     variant: "danger",
  //   },
  //   {
  //     id: "8f93e1a7-b4ec-4b75-9f41-5261cd6d8d25",
  //     title: "Weekly Standup.",
  //     description: "Weekly team status update.",
  //     startDate: new Date("2024-10-09T09:30:00"),
  //     endDate: new Date("2024-10-09T10:00:00"),
  //     variant: "default",
  //   },
  //   {
  //     id: "d3e5c45a-ef1d-4bc9-b01d-9c7f3c8c7a5b",
  //     title: "Design Review.",
  //     description: "Review the latest design mockups.",
  //     startDate: new Date("2024-10-10T13:00:00"),
  //     endDate: new Date("2024-10-10T14:00:00"),
  //     variant: "primary",
  //   },
  //   {
  //     id: "d01ab0ec-5b5a-4f79-97ec-b64e62956c71",
  //     title: "Budget Meeting.",
  //     description: "Discuss the budget for the next fiscal year.",
  //     startDate: new Date("2024-10-10T10:00:00"),
  //     endDate: new Date("2024-10-10T11:30:00"),
  //     variant: "success",
  //   },
  //   {
  //     id: "0f8b843e-8f72-44ec-910f-4aa0f368b2c8",
  //     title: "Team Building Activity.",
  //     description: "Fun activities to strengthen team bonds.",
  //     startDate: new Date("2024-10-11T16:00:00"),
  //     endDate: new Date("2024-10-11T19:00:00"),
  //     variant: "warning",
  //   },
  //   {
  //     id: "5a0c74bc-c3d8-4c37-92e2-b4b9b73dbf2b",
  //     title: "Vendor Negotiation.",
  //     description: "Negotiate terms with potential vendors.",
  //     startDate: new Date("2024-10-12T10:30:00"),
  //     endDate: new Date("2024-10-12T12:00:00"),
  //     variant: "danger",
  //   },
  //   {
  //     id: "3f40cd3c-bc73-4eab-ae02-032f9610d0c4",
  //     title: "Product Development Update.",
  //     description: "Update on the product development status.",
  //     startDate: new Date("2024-10-12T14:00:00"),
  //     endDate: new Date("2024-10-12T15:00:00"),
  //     variant: "default",
  //   },
  //   {
  //     id: "3a1e6f45-91b0-4d88-bb34-6dbf17326c98",
  //     title: "Conference Preparation.",
  //     description: "Prepare for the upcoming industry conference.",
  //     startDate: new Date("2024-10-13T08:00:00"),
  //     endDate: new Date("2024-10-13T10:00:00"),
  //     variant: "primary",
  //   },
  //   {
  //     id: "4c1f4e5a-bb6d-43eb-846e-1f5c403203f2",
  //     title: "Social Media Strategy.",
  //     description: "Develop a strategy for social media marketing.",
  //     startDate: new Date("2024-10-13T09:00:00"),
  //     endDate: new Date("2024-10-13T10:30:00"),
  //     variant: "success",
  //   },
  //   {
  //     id: "6e18bc5f-5d4e-407c-8395-3b2ae2a3c65a",
  //     title: "Sales Training.",
  //     description: "Conduct training for the sales team.",
  //     startDate: new Date("2024-10-13T13:00:00"),
  //     endDate: new Date("2024-10-13T15:00:00"),
  //     variant: "warning",
  //   },
  //   {
  //     id: "d09e9e34-5c5f-44f7-8f8a-8cc9dcda7aa2",
  //     title: "Emergency System Update.",
  //     description: "Critical update to prevent system failures.",
  //     startDate: new Date("2024-10-12T22:00:00"),
  //     endDate: new Date("2024-10-13T02:00:00"),
  //     variant: "danger",
  //   },
  //   {
  //     id: "09b6e1d5-3ab6-4d99-93e5-e98b8b49d5f6",
  //     title: "Quarterly Business Review.",
  //     description: "Review business performance for the quarter.",
  //     startDate: new Date("2024-10-07T10:00:00"),
  //     endDate: new Date("2024-10-07T12:00:00"),
  //     variant: "default",
  //   },
  //   {
  //     id: "53c9fcd3-80ee-4c76-b2c3-2c65b73f9785",
  //     title: "Feedback Collection.",
  //     description: "Collect feedback from team members.",
  //     startDate: new Date("2024-10-08T15:00:00"),
  //     endDate: new Date("2024-10-08T16:00:00"),
  //     variant: "primary",
  //   },
  //   {
  //     id: "4cf73125-9477-4798-8f1f-3cd18a64b23a",
  //     title: "Product Roadmap Discussion.",
  //     description: "Discuss future product roadmap.",
  //     startDate: new Date("2024-10-09T14:00:00"),
  //     endDate: new Date("2024-10-09T15:30:00"),
  //     variant: "success",
  //   },
  //   {
  //     id: "9824cf9c-7d70-4209-b8b8-7092875c3038",
  //     title: "Website Redesign Meeting.",
  //     description: "Plan the redesign of the company website.",
  //     startDate: new Date("2024-10-10T10:00:00"),
  //     endDate: new Date("2024-10-10T11:00:00"),
  //     variant: "warning",
  //   },
  //   {
  //     id: "e8c64046-2097-41e5-8b86-d300d5710579",
  //     title: "Data Security Workshop.",
  //     description: "Workshop on data security best practices.",
  //     startDate: new Date("2024-10-11T13:00:00"),
  //     endDate: new Date("2024-10-11T15:00:00"),
  //     variant: "danger",
  //   },
  //   {
  //     id: "12d8b2c5-b13e-4c25-89e8-3d4df1ae3c41",
  //     title: "Innovation Session.",
  //     description: "Brainstorming session for innovative ideas.",
  //     startDate: new Date("2024-10-12T11:00:00"),
  //     endDate: new Date("2024-10-12T12:30:00"),
  //     variant: "danger",
  //   },
  // ],

  events: [],
};

// Reducer function
const schedulerReducer = (
  state: SchedulerState,
  action: Action
): SchedulerState => {
  switch (action.type) {
    case "ADD_EVENT":
      return { ...state, events: [...state.events, action.payload] };

    case "REMOVE_EVENT":
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload.id),
      };
    case "UPDATE_EVENT":
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.id ? action.payload : event
        ),
      };
    default:
      return state;
  }
};

// Create the context with the correct type
const SchedulerContext = createContext<SchedulerContextType | undefined>(
  undefined
);

// Provider component
export const SchedulerProvider = ({
  children,
  onAddEvent,
  onUpdateEvent,
  onDeleteEvent,
  weekStartsOn = "sunday",
}: {
  onAddEvent?: (event: Event) => void;
  onUpdateEvent?: (event: Event) => void;
  onDeleteEvent?: (id: string) => void;
  weekStartsOn?: startOfWeek;
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(schedulerReducer, initialState);

  // global getters
  const getDaysInMonth = (month: number, year: number) => {
    return Array.from(
      { length: new Date(year, month + 1, 0).getDate() },
      (_, index) => ({
        day: index + 1,
        events: [],
      })
    );
  };

  const getDaysInWeek = (week: number, year: number) => {
    // Determine if the week should start on Sunday (0) or Monday (1)
    const startDay = weekStartsOn === "sunday" ? 0 : 1;

    // Get January 1st of the year
    const janFirst = new Date(year, 0, 1);

    // Calculate how many days we are offsetting from January 1st
    const janFirstDayOfWeek = janFirst.getDay();

    // Calculate the start of the week by finding the correct day in the year
    const weekStart = new Date(janFirst);
    weekStart.setDate(
      janFirst.getDate() +
        (week - 1) * 7 +
        ((startDay - janFirstDayOfWeek + 7) % 7)
    );

    // Generate the week’s days
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(weekStart);
      day.setDate(day.getDate() + i);
      days.push(day);
    }

    return days;
  };

  const getWeekNumber = (date: Date) => {
    const d = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil(
      ((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
    );
    return weekNo;
  };

  // Helper function to filter events for a specific day
  const getEventsForDay = (day: number, currentDate: Date) => {
    return state?.events.filter((event) => {
      const eventStart = new Date(event.startDate);
      const eventEnd = new Date(event.endDate);

      // Create new Date objects to avoid mutating `currentDate`
      const startOfDay = new Date(currentDate);
      startOfDay.setDate(day);
      startOfDay.setHours(0, 0, 0, 0);

      const endOfDay = new Date(currentDate);
      endOfDay.setDate(day + 1);
      endOfDay.setHours(0, 0, 0, 0);

      // Check if the event starts or spans across the given day
      const isSameDay =
        eventStart.getDate() === day &&
        eventStart.getMonth() === currentDate.getMonth() &&
        eventStart.getFullYear() === currentDate.getFullYear();

      const isSpanningDay = eventStart < endOfDay && eventEnd >= startOfDay;

      return isSameDay || isSpanningDay;
    });
  };

  const getDayName = (day: number) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  };

  const getters: Getters = {
    getDaysInMonth,
    getEventsForDay,
    getDaysInWeek,
    getWeekNumber,
    getDayName,
  };

  // handlers
  function handleEventStyling(event: Event, dayEvents: Event[]) {
    const eventsOnHour = dayEvents.filter((e) => {
      return (
        e.startDate < event.endDate && e.endDate > event.startDate // Any overlap
      );
    });

    const numEventsOnHour = eventsOnHour.length || 1;
    const indexOnHour = eventsOnHour.indexOf(event);

    let eventHeight = 0;
    let maxHeight = 0;
    let eventTop = 0;

    if (event.startDate instanceof Date && event.endDate instanceof Date) {
      // Normalize start and end dates to only include hours and minutes
      const startTime =
        event.startDate.getHours() * 60 + event.startDate.getMinutes(); // Convert to minutes
      const endTime =
        event.endDate.getHours() * 60 + event.endDate.getMinutes(); // Convert to minutes

      // Calculate the difference in minutes between start and end times
      const diffInMinutes = endTime - startTime;

      // Calculate the event height based on the duration (64px per hour, so 64px/60min = 1.0667px per minute)
      eventHeight = (diffInMinutes / 60) * 64;
      // console.log("eventHeight", eventHeight);

      // Get the event start hour as a fraction (e.g., 13.5 for 13:30)
      const eventStartHour =
        event.startDate.getHours() + event.startDate.getMinutes() / 60;

      // Define the day-end hour (24.0 for midnight)
      const dayEndHour = 24;

      // Calculate maxHeight based on the difference between the day-end hour and the event's start hour
      maxHeight = Math.max(0, (dayEndHour - eventStartHour) * 64);

      // Limit the event height to the calculated maxHeight (so it doesn’t overflow beyond the day)
      eventHeight = Math.min(eventHeight, maxHeight);

      // Calculate the top position based on the event's start time (64px per hour)
      eventTop = eventStartHour * 64;
    } else {
      console.error("Invalid event or missing start/end dates.");
    }

    return {
      height: `${eventHeight < 10 ? 20 : eventHeight > maxHeight ? maxHeight : eventHeight}px`,
      top: `${eventTop}px`,
      zIndex: indexOnHour + 1,
      left: `${(indexOnHour * 100) / numEventsOnHour}%`,
      maxWidth: `${100 / numEventsOnHour}%`,
      minWidth: `${100 / numEventsOnHour}%`,
    };
  }

  function handleAddEvent(event: Event) {
    dispatch({ type: "ADD_EVENT", payload: event });
    if (onAddEvent) {
      onAddEvent(event);
    }
  }

  function handleUpdateEvent(event: Event, id: string) {
    dispatch({ type: "UPDATE_EVENT", payload: { ...event, id } });
    if (onUpdateEvent) {
      onUpdateEvent(event);
    }
  }

  function handleDeleteEvent(id: string) {
    dispatch({ type: "REMOVE_EVENT", payload: { id } });
    if (onDeleteEvent) {
      onDeleteEvent(id);
    }
  }

  const handlers: Handlers = {
    handleEventStyling,
    handleAddEvent,
    handleUpdateEvent,
    handleDeleteEvent,
  };

  return (
    <SchedulerContext.Provider
      value={{ events: state, dispatch, getters, handlers }}
    >
      <ModalProvider>{children}</ModalProvider>
    </SchedulerContext.Provider>
  );
};

// Custom hook to use the scheduler context
export const useScheduler = () => {
  const context = useContext(SchedulerContext);
  if (!context) {
    throw new Error("useScheduler must be used within a SchedulerProvider");
  }
  return context;
};
