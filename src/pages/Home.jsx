import { useState, useEffect } from "react"
import { Box, Text, Heading, LinkBox, LinkOverlay, Divider, Grid, GridItem, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@chakra-ui/react"

import '../components/styles/base.styles.css'
import LayoutsComponent from "../components/layouts/Layouts"

function HomePage () {
    return (
        <div className="HomePage">
            <LayoutsComponent/>
        </div>
    )
}

export default HomePage