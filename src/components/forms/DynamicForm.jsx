import TextInput from "../../components/common/TextInput"

const DynamicFormComponent = ({ fields, values, onChange }) => {
    return (
        <>
            {fields.map((field, index) => (
                <TextInput
                    key={index}
                    value={values[field.name]}
                    onChange={(e) => onChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    placeholderSM={field.placeholderSM}
                    fontSize={35}
                    marginBottom={4}
                    type={field.type}
                    isRequired={field.isRequired}
                />
            ))}
        </>
    );
}

export default DynamicFormComponent