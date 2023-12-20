import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

/**
 * schema used for generation of the configuration dialog
 * see https://react-jsonschema-form.readthedocs.io/en/latest/ for documentation
 */
export const configurationSchema: JSONSchema7 = {
      type: "array",
      items: {
        type:"object",
        properties:{
          name:{
            type:"string",
            title:"name of the person"
          },
          location:{
            type:"string",
            title:"enter a location"
          }
        }
      }
};

/**
 * schema to add more customization to the form's look and feel
 * @see https://react-jsonschema-form.readthedocs.io/en/latest/api-reference/uiSchema/
 */
export const uiSchema: UiSchema = {
  items: {
    name: {
      "ui:widget": "text",
      "ui:title": "Name of the person"
    },
    location: {
      "ui:widget": "text",
      "ui:title": "Enter a location"
    }
  }
};