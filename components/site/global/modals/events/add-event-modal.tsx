"use client";

import React, { useEffect, useState } from "react";
import {
  ModalFooter,
  Button,
  Input,
  Textarea,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useModalContext } from "@/providers/modal-provider";
import SelectDate from "@/components/schedule/_components/add-event-components/select-date";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useScheduler, Variant } from "@/providers/schedular-provider";
import { v4 as uuidv4 } from "uuid"; // Use UUID to generate event IDs
import { Event } from "@/providers/schedular-provider"; // Import Event type

// Define Zod schema for form validation
const eventSchema = z.object({
  title: z.string().nonempty("Event name is required"),
  description: z.string().optional(),
  startDate: z.date(),
  endDate: z.date(),
  variant: z.enum(["primary", "danger", "success", "warning", "default"]),
  color: z.string().nonempty("Color selection is required"),
});

export type EventFormData = z.infer<typeof eventSchema>;

export default function AddEventModal() {
  const { onClose, data } = useModalContext();

  const [selectedColor, setSelectedColor] = useState<string>(
    getEventColor(data?.variant || "primary")
  );

  const typedData = data as Event;

  const { dispatch } = useScheduler();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
      variant: data?.variant || "primary",
      color: data?.color || "blue",
    },
  });

  // Reset the form on initialization
  useEffect(() => {
    if (data) {
      reset({
        title: data.title,
        description: data.description || "",
        startDate: data.startDate,
        endDate: data.endDate,
        variant: data.variant || "primary",
        color: data.color || "blue",
      });
    }
  }, [data, reset]);

  const colorOptions = [
    { key: "blue", name: "Blue" },
    { key: "red", name: "Red" },
    { key: "green", name: "Green" },
    { key: "yellow", name: "Yellow" },
  ];

  function getEventColor(variant: Variant) {
    switch (variant) {
      case "primary":
        return "blue";
      case "danger":
        return "red";
      case "success":
        return "green";
      case "warning":
        return "yellow";
      default:
        return "blue";
    }
  }

  function getEventStatus(color: string) {
    switch (color) {
      case "blue":
        return "primary";
      case "red":
        return "danger";
      case "green":
        return "success";
      case "yellow":
        return "warning";
      default:
        return "default";
    }
  }

  const onSubmit: SubmitHandler<EventFormData> = (formData) => {
    const newEvent: Event = {
      id: uuidv4(), // Generate a unique ID
      title: formData.title,
      startDate: formData.startDate,
      endDate: formData.endDate,
      variant: formData.variant,
      description: formData.description,
    };

    if (!typedData?.id) dispatch({ type: "ADD_EVENT", payload: newEvent });
    else
      dispatch({ type: "UPDATE_EVENT", payload: { ...newEvent, id: data.id } });
    onClose(); // Close the modal after submission
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("title")}
        label="Event Name"
        placeholder="Enter event name"
        variant="bordered"
        isInvalid={!!errors.title}
        errorMessage={errors.title?.message}
      />
      <Textarea
        {...register("description")}
        label="Description"
        placeholder="Enter event description"
        variant="bordered"
      />
      <SelectDate data={data} setValue={setValue} />

      <Dropdown backdrop="blur">
        <DropdownTrigger>
          <Button
            variant="flat"
            className="justify-between w-fit my-4"
            color={getEventStatus(selectedColor)}
          >
            {colorOptions.find((color) => color.key === selectedColor)?.name}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Color selection"
          variant="flat"
          selectionMode="single"
          selectedKeys={[selectedColor]}
          onSelectionChange={(keys) => {
            const color = (keys.currentKey as string) || "blue";
            setSelectedColor(color);

            reset((formData) => ({
              ...formData,
              variant: getEventStatus(color),
            }));
          }}
        >
          {colorOptions.map((color) => (
            <DropdownItem
              key={color.key}
              startContent={
                <div className={`w-4 h-4 rounded-full bg-${color.key}-500`} />
              }
            >
              {color.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

      <ModalFooter className="px-0">
        <Button color="danger" variant="light" onPress={onClose}>
          Cancel
        </Button>
        <Button color="primary" type="submit">
          Save Event
        </Button>
      </ModalFooter>
    </form>
  );
}