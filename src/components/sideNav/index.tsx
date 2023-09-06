import { styled } from "@stitches/react"

const SideNav = () => {
    return(
        <Root className="flex flex-col ">

            <div className="text-2xl">
                GENIE GEM
            </div>
            <NavItem>Dashboard</NavItem>
            <NavItem>Students</NavItem>
            <NavItem>Teachers</NavItem>
            <NavItem>Account</NavItem>
            <NavItem>Notifications</NavItem>
            <NavItem></NavItem>

        </Root>
    )
}

export default SideNav

const Root = styled('div', {
    paddingInline:"1rem",
})

const NavItem = styled('div', {
    minHeight:"40px",
    maxHeight:"50px",
    backgroundColor:"red",

})