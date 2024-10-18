# Mina Scheduler Library

Welcome to the **Mina Scheduler Library**, a customizable and flexible calendar component for React that allows you to manage and display events in day, week, or month views. This library uses **Next UI** components for its user interface, so to ensure a consistent UI experience, make sure to use it inside a **Next UI** project.

## Features

- **Day, Week, Month Views:** Switch between different calendar views with ease.
- **Event Management:** Add, update, and delete events with built-in form validation.
- **Customizable UI:** Easily customize the look and feel of the calendar, including buttons, tabs, and event modals.
- **Mobile-Friendly:** Responsive design optimized for mobile devices.
- **Framer Motion Animations:** Smooth transitions between views.
- **Zod Validation:** Schema validation for ensuring valid event data.
- **Next UI Integration:** Leverages Next UI for a seamless user interface.


## Demo
### Live Demo : https://mina-scheduler.vercel.app/

![alt text](readme-assets/calendar-sc-1.png)
![alt text](readme-assets/calendar-sc-2.png)
![alt text](readme-assets/calendar-sc-3.png)
![alt text](readme-assets/calendar-sc-4.png)
![alt text](readme-assets/calendar-sc-5.png)
![alt text](readme-assets/calendar-sc-6.png)
![alt text](readme-assets/calendar-sc-1-light.png)



## Installation

To install the library, run:

```bash
npm install mina-scheduler
```

### Note:
Since this library is built using **Next UI** components, it's recommended to use it within a **Next UI** project to maintain the same UI experience.

### Pre-Styled
To include the styles from the `mina-scheduler` package in your Tailwind CSS setup, add the following line to the `content` array in your `tailwind.config.js`:

```javascript
content: [
    "./node_modules/mina-scheduler/**/*.{js,ts,jsx,tsx}",
    // other paths...
],
```
This line ensures that Tailwind scans all JavaScript and TypeScript files in the `mina-scheduler` package for class names. Make sure to include any other relevant paths in the `content` array as needed.

## Basic Usage

Here’s how you can get started using the **SchedulerProvider** and **SchedularView** components in your React project with minimal setup:

```tsx
"use client";

import { SchedulerProvider, SchedularView } from "mina-scheduler";


export default function Home() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 py-8 md:py-10">
      <SchedulerProvider>
        <SchedularView />
      </SchedulerProvider>
    </section>
  );
}
```

## Customized Usage

You can customize the calendar by passing custom views, buttons, and event modals using the `SchedularView` and `SchedulerProvider` props:

```tsx
"use client";

import { SchedulerProvider, SchedularView } from "mina-scheduler";


export default function Home() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 py-8 md:py-10">
      <SchedulerProvider>
        <SchedularView
          classNames={{
            buttons: {
              addEvent: "bg-red-500",
              next: "bg-blue-500",
              prev: "bg-green-500",
            },
          }}
          views={{ views: ["day", "month", "week"], mobileViews: ["day"] }}
          CustomComponents={{
            CustomEventModal: {
              CustomAddEventModal: {
                title: "Custom Add Event",
                CustomForm: MyCustomForm,
              },
            },
          }}
        />
      </SchedulerProvider>
    </section>
  );
}

const MyCustomForm: React.FC<{ register: any; errors: any }> = ({
  register,
  errors,
}) => (
  <>
    <input
      {...register("title")}
      placeholder="Custom Event Name"
      className={`input ${errors.title ? "input-error" : ""}`}
    />
    {errors.title && (
      <span className="error-message">{errors.title.message}</span>
    )}

    <textarea
      {...register("description")}
      placeholder="Custom Description"
      className="textarea"
    />

    <input
      {...register("startDate")}
      type="date"
      className={`input ${errors.startDate ? "input-error" : ""}`}
    />

    <input
      {...register("endDate")}
      type="date"
      className={`input ${errors.endDate ? "input-error" : ""}`}
    />

    <button type="submit" className="btn">
      Submit
    </button>
  </>
);
```

## API Documentation

### SchedulerProvider

The `SchedulerProvider` component wraps the calendar and provides necessary context and state management for the events and calendar views.

#### Props:
- **onAddEvent** `(optional)`: `(event: Event) => void` – Callback triggered when an event is added.
- **onUpdateEvent** `(optional)`: `(event: Event) => void` – Callback triggered when an event is updated.
- **onDeleteEvent** `(optional)`: `(id: string) => void` – Callback triggered when an event is deleted.
- **weekStartsOn** `(optional)`: `"sunday"` | `"monday"` – Specifies the starting day of the week. Defaults to `"sunday"`.
- **children**: `ReactNode` – The children components to render within the provider.

### SchedularView

This component is the main calendar view. It supports day, week, and month views, as well as custom components for event modals and buttons.

#### Props:
- **views** `(optional)`: `Views` – Specify which views (day, week, month) are available and which are shown on mobile.
  - **views**: `("day" | "week" | "month")[]` – The available views for desktop.
  - **mobileViews**: `("day" | "week" | "month")[]` – The available views for mobile devices.

- **CustomComponents** `(optional)`: `CustomComponents` – Customize components such as event modals, buttons, and tabs.
  - **CustomEventModal**: Customize event modals, such as the Add Event form.
  - **customTabs**: Customize the tabs for Day, Week, and Month.
  
- **classNames** `(optional)`: `ClassNames` – Customize the styling of buttons, tabs, and other elements.

### useScheduler

A custom hook that provides access to the `SchedulerContext`, including state, getters, and handlers.

```tsx
const { state, dispatch, getters, handlers } = useScheduler();
```

### Event Schema and Form Data

The library uses **Zod** for form validation, and **React Hook Form** for handling form data. Here's the event schema and how it's used in the form.

#### Event Schema (Zod)

The `eventSchema` defines the structure and validation rules for event forms using **Zod**.

```ts
export const eventSchema = z.object({
  title: z.string().nonempty("Event name is required"),
  description: z.string().optional(),
  startDate: z.date(),
  endDate: z.date(),
  variant: z.enum(["primary", "danger", "success", "warning", "default"]),
  color: z.string().nonempty("Color selection is required"),
});
```

#### EventFormData

The form data is handled through the `EventFormData` interface, which corresponds to the schema's structure.

```ts
export type EventFormData = z.infer<typeof eventSchema>;
```

### SelectDate Component

The `SelectDate` component helps with selecting a date range and times for an event.

#### Props:
- **data** `(optional)`: `{ startDate: Date; endDate: Date; time: Time }` – The initial data for start and end dates and times.
- **setValue**: `UseFormSetValue<EventFormData>` – Function from React Hook Form to set form values.

#### Example of Usage:

```tsx
import { UseFormSetValue } from "react-hook-form";
import SelectDate from "@/components/schedule/_components/add-event-components/select-date";

<SelectDate data={data} setValue={setValue} />
```

### Types and Interfaces

#### Event

Represents an individual event on the calendar.

```ts
export interface Event {
  id: string;
  title: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  variant?: Variant;
}
```

#### Variant

Defines the style variant of an event, which can be one of the following:
- `"success"`
- `"primary"`
- `"default"`
- `"warning"`
- `"danger"`

#### Views

Defines the available views for mobile and desktop.

```ts
export type Views = {
  mobileViews?: string[];
  views?: string[];
};
```

#### startOfWeek

Specifies the starting day of the week, either `"sunday"` or `"monday"`.

```ts
export type startOfWeek = "sunday" | "monday";
```

#### CustomEventModal

Represents customization options for the event modal, including the form and title.

```ts
export interface CustomEventModal {
  CustomAddEventModal?: {
    title?: string;
    CustomForm?: React.FC<{ register: any; errors: any }>;
  };
}
```

#### CustomComponents

Defines customizable components such as buttons, tabs, and event modals.

```ts
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
```

#### ClassNames

Groups class names for buttons, tabs, and views.

```ts
export interface ClassNames {
  event?: string;
  buttons?: ButtonClassNames;
  tabs?: TabsClassNames;
  views?: ViewClassNames;
}
```

#### ButtonClassNames

Specifies class names for previous, next, and add event buttons.

```ts
export interface ButtonClassNames {
 

 prev?: string;
  next?: string;
  addEvent?: string;
}
```

#### TabsClassNames

Specifies class names for various parts of the tab interface.

```ts
export interface TabsClassNames {
  cursor?: string;
  panel?: string;
  tab?: string;
  tabContent?: string;
  tabList?: string;
  wrapper?: string;
}
```

#### ViewClassNames

Specifies class names for day, week, and month views.

```ts
export interface ViewClassNames {
  dayView?: string;
  weekView?: string;
  monthView?: string;
}
```

## License

This library is licensed under the MIT License.

---

Thank you, feel free to follow me on linkedIn : https://www.linkedin.com/in/mina-melad/
contact with me and discover my portfolio : https://mina-massoud.onrender.com/
