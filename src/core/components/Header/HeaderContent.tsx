type HeaderActionsProps = {
    children: React.ReactNode;
};

export function HeaderContent({ children }: HeaderActionsProps) {
    return (
        <div className="header-actions">
            {children}
        </div>
    );
}