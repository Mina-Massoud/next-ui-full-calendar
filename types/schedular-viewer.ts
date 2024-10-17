import { Event } from "@/providers/schedular-provider";

export type Views = {
  mobileViews?: string[];
  views?: string[];
};

export type startOfWeek = "sunday" | "monday";

export interface CustomEventModal {
  CustomAddEventModal?: {
    title?: string;
    CustomForm?: React.FC<{ register: any; errors: any }>;
  };
}

export interface CustomComponents {
  customButtons?: {
    CustomAddEventButton?: React.ReactNode;
    CustomPrevButton?: React.ReactNode;
    CustomNextButton?: React.ReactNode;
  };

  customTabs?: {
    CustomDayTab?: React.ReactNode;
    CustomWeekTab?: React.ReactNode;
    CustomMonthTab?: React.ReactNode;
  };
  CustomEventComponent?: React.FC<Event>; // Using custom event type
  CustomEventModal?: CustomEventModal;
}

export interface ButtonClassNames {
  prev?: string;
  next?: string;
  addEvent?: string;
}

export interface TabClassNames {
  view?: string;
}

export interface TabsClassNames {
  cursor?: string;
  panel?: string;
  tab?: string;
  tabContent?: string;
  tabList?: string;
  wrapper?: string;
}

export interface ViewClassNames {
  dayView?: string;
  weekView?: string;
  monthView?: string;
}

export interface ClassNames {
  event?: string;
  buttons?: ButtonClassNames;
  tabs?: TabsClassNames;
  views?: ViewClassNames;
}
