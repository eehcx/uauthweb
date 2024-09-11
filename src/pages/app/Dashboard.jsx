import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'

function DashboardPage() {
    return(
        <>
            <Breadcrumb marginX={10} paddingTop={8} paddingBottom={2} color={'#fafafa'} spacing='8px' separator={<ChevronRightIcon color='white' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Inicio</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/console'>Consola</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            
            <div className=" mx-10">
                <h1 className=" text-gray-200 text-2xl font-semibold">Hola mundo</h1>
            </div>
        </>
    )
}

export default DashboardPage