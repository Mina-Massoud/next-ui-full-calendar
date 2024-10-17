"use client";

import SchedulerWrapper from "@/components/schedule/_components/view/schedular-view-filteration";
import { Event, SchedulerProvider } from "@/providers/schedular-provider";

export default function Home() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 py-8 md:py-10">
      <SchedulerProvider>
        <SchedulerWrapper
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

function CustomDayTab() {
  return <div className="">my Day tab</div>;
}

const CustomEventStyled: React.FC<Event> = (event, customData) => {
  return (
    <div>
      {event?.title} {event?.variant}
    </div>
  );
};

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
