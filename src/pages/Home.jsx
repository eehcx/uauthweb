import { useState, useEffect } from "react"
import { Box, Text, Heading, LinkBox, LinkOverlay, Divider, Grid, GridItem, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@chakra-ui/react"

import '../components/styles/base.styles.css'
import NavbarComponent from "../components/layouts/Navbar"

function HomePage () {
    return (
        <div className="HomePage">
            <NavbarComponent/>
        </div>
    )
}

export default HomePage