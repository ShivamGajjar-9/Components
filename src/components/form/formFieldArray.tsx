"use client";
import React from "react";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { useFieldArray } from "react-hook-form";

const formFieldArray = ({ control, name, fieldArray }: Props) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });
  
  return (
    
    <ul>
      {fields.map((item, index) => (
        <li key={item.id} className="flex ">
          {fieldArray.map(
            ({ component: Component, name: itemName, ...item }) => {
              return (
                <Component
                  key={item.name}
                  control={Form.control}
                  name={`${name}.${index}.${itemName}`}
                  {...item}
                />
              );
            }
          )}
          <button type="button" onClick={() => remove(index)}>
            Delete
          </button>
        </li>
      ))}
      <Button
        type="button"
        onClick={() => {
          append(fieldArray.reduce((p, c) => ({ ...p, [c.name]: "" }), {}));
        }}
      >
        Add Item
      </Button>
    </ul>
  );
};

export default formFieldArray;
