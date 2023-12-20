import React from "react"
import {screen, render} from "@testing-library/react"

import {ObjectArrays} from "./object-arrays";

describe("ObjectArrays", () => {
    it("should render the component", () => {
        render(<ObjectArrays contentLanguage="en_US" message="World"/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
