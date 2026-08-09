import "./Form.css";

type FormGroupProps = {
    className?: string;
    children: React.ReactNode;
}

export function FormGroup({ className, children }: FormGroupProps) {

    return (
        <div className={`form-group ${className ?? ""}`}>
            {children}
        </div>
    );
};
