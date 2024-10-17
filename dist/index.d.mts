import React$1, { ReactNode } from 'react';

type Views = {
    mobileViews?: string[];
    views?: string[];
};
type startOfWeek = "sunday" | "monday";
interface CustomEventModal {
    CustomAddEventModal?: {
        title?: string;
        CustomForm?: React.FC<{
            register: any;
            errors: any;
        }>;
    };
}
interface CustomComponents {
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
    CustomEventComponent?: React.FC<Event>;
    CustomEventModal?: CustomEventModal;
}
interface ButtonClassNames {
    prev?: string;
    next?: string;
    addEvent?: string;
}
interface TabsClassNames {
    cursor?: string;
    panel?: string;
    tab?: string;
    tabContent?: string;
    tabList?: string;
    wrapper?: string;
}
interface ViewClassNames {
    dayView?: string;
    weekView?: string;
    monthView?: string;
}
interface ClassNames {
    event?: string;
    buttons?: ButtonClassNames;
    tabs?: TabsClassNames;
    views?: ViewClassNames;
}

interface Event {
    id: string;
    title: string;
    description?: string;
    startDate: Date;
    endDate: Date;
    variant?: Variant;
}
declare const variants: readonly ["success", "primary", "default", "warning", "danger"];
type Variant = (typeof variants)[number];
declare const SchedulerProvider: ({ children, onAddEvent, onUpdateEvent, onDeleteEvent, weekStartsOn, }: {
    onAddEvent?: ((event: Event) => void) | undefined;
    onUpdateEvent?: ((event: Event) => void) | undefined;
    onDeleteEvent?: ((id: string) => void) | undefined;
    weekStartsOn?: startOfWeek | undefined;
    children: ReactNode;
}) => React$1.JSX.Element;

declare function SchedulerViewFilteration({ views, CustomComponents, classNames, }: {
    views?: Views;
    CustomComponents?: CustomComponents;
    classNames?: ClassNames;
}): React$1.JSX.Element;

export { SchedulerViewFilteration as SchedularView, SchedulerProvider };
