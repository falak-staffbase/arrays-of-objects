/*!
 * Copyright 2023, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ReactElement } from "react";
import { BlockAttributes } from "widget-sdk";

/**
 * React Component
 */
interface CustomBlockAttributes extends Omit<BlockAttributes, string> {
}
export interface ObjectArraysProps extends CustomBlockAttributes {
  elements: {name: string; location: string }[];
}


export const ObjectArrays = ({ elements}: ObjectArraysProps): ReactElement => {
  console.log(elements)

  if (!elements) {
    // You can return a message or another component when elements is undefined
    return <div>No elements to display</div>;
  }

  return       <div>
  {elements.map((element, index) => (
    <div key={index.toString()}>
      <p>Name: {element.name}</p>
      <p>Location: {element.location}</p>
    </div>
  ))}
</div>
};

