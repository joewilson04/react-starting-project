export default function Tabs({ children, buttons, buttonContainer }) {
    const ButtonContainer = buttonContainer;
    return <>
        <menu>
            <buttonContainer>{buttons}</buttonContainer>
        </menu>
        {children}
    </>
}