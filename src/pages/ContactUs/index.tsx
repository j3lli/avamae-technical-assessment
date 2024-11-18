import { FormEvent, useState } from "react";
import { Button, Checkbox, Footer, NumberField, TextAreaField, TextField } from "../../components"
import { ContactUsService } from "../../services";
import { ReactComponent as SubmitIcon } from '../../assets/svgs/submit.svg';
import { ReactComponent as SuccessIcon } from '../../assets/svgs/success.svg';
import { ReactComponent as ErrorIcon } from '../../assets/svgs/error.svg';

export const ContactUs = () => {

    //state
    const [error, setError] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [showAddress, setShowAddress] = useState<boolean>(false);
    const [form, setForm] = useState({
        FullName: '',
        EmailAddress: '',
        Message: '',
        PhoneNumbers: new Array<string>(),
        AddressDetails: {
            AddressLine1: '',
            AddressLine2: '',
            CityTown: '',
            StateCounty: '',
            PostCode: '',
            Country: '',
        }
    })
    const [phoneForm, setPhoneForm] = useState<Array<{ label: string, value: string }>>(
        [{ label: 'Phone number 1', value: '' }]
    );

    //functions
    const onFormChange = (e: any) => {
        if (!e.target.name || !e.target.value) return;
        const key = e.target.name as string;
        const val = e.target.value as string;

        if (key.toLowerCase().includes('phone')) {
            const phoneIndex = parseInt(key.split('_').pop() || '0', 10);
            const numbers = [...form.PhoneNumbers];
            numbers[phoneIndex] = val;
            setForm((prev) => ({ ...prev, PhoneNumbers: numbers }));
        }
        else if (Object.keys(form.AddressDetails).includes(key)) {
            setForm((prev) => ({
                ...prev,
                AddressDetails: {
                    ...prev.AddressDetails,
                    [key]: val,
                },
            }));
        }
        else {
            setForm((prev) => { return { ...prev, [key]: val } })
        }
    }

    const onCheckboxChange = (e: any) => {
        const checked = e.target.checked as boolean;
        setShowAddress((prev) => !prev);
        setForm((prev) => { return { ...prev, bIncludeAddressDetails: checked } })
    }

    const handleFieldAddition = (e: FormEvent) => {
        e.preventDefault();
        const values = [...phoneForm];
        values.push({
            label: `Phone number ${phoneForm.length + 1}`,
            value: "",
        });
        setPhoneForm(values);
    };

    const onSubmitHandle = (e: FormEvent) => {
        e.preventDefault();

        const data = JSON.stringify(form);
        ContactUsService.postContactForm(data)
            .then(() => {
                setSuccess(true);
            })
            .catch((e) => {
                setError(true);
            })
    }

    return (
        <>
            <div className="contact-container">
                <div className="contact-form-container">
                    <h2>Contact us</h2>
                    <p>Populo facillsi nam no, dolor deleniti deseruisse ne cum, nam quodsi allquam ellgendi ne. Ferri euismod accusata te nec, summo accumsan at vix.</p>
                    {success &&
                        <div className="success-card">
                            <div className="success-icon">
                                <SuccessIcon />
                            </div>
                            <h3>Your message has been sent</h3>
                            <p>We will be in contact with you within 24 hours.</p>
                        </div>
                    }
                    {error &&
                        <div className="error-card">
                            <div className="error-icon">
                                <ErrorIcon />
                            </div>
                            <h3>Your message could not be sent</h3>
                            <p>Please contact support if this issues persists.</p>
                        </div>
                    }
                    {(!success && !error) &&
                        <form onSubmit={onSubmitHandle}>
                            <div className="contact-form-grid-2">
                                <TextField
                                    required
                                    label="Full name"
                                    name={'FullName'}
                                    onChange={(e) => onFormChange(e)}
                                />
                                <TextField
                                    required
                                    label="Email address"
                                    name={'EmailAddress'}
                                    onChange={(e) => onFormChange(e)}
                                />
                            </div>
                            {phoneForm.map((val, index) => (
                                <NumberField
                                    key={index}
                                    label={val.label}
                                    name={`phone_number_${index}`}
                                    onChange={(e) => onFormChange(e)}
                                    optional
                                />
                            ))}
                            <Button
                                className="contact-button-add"
                                text="Add new phone number"
                                onClick={handleFieldAddition}
                            />
                            <TextAreaField
                                required
                                label="Message"
                                name={"Message"}
                                onChange={(e) => onFormChange(e)}
                            />
                            <Checkbox
                                label="Add address details"
                                onChange={(e) => onCheckboxChange(e)}
                            />
                            {showAddress &&
                                <>
                                    <div className="contact-form-grid-2">
                                        <TextField
                                            required
                                            label="Address line 1"
                                            name={'AddressLine1'}
                                            onChange={(e) => onFormChange(e)}
                                        />
                                        <TextField
                                            label="Address line 2"
                                            name={'AddressLine2'}
                                            onChange={(e) => onFormChange(e)}
                                            optional
                                        />
                                    </div>
                                    <div className="contact-form-grid-4">
                                        <TextField
                                            required
                                            label="City/Town"
                                            name={'CityTown'}
                                            onChange={(e) => onFormChange(e)}
                                        />
                                        <TextField
                                            required
                                            label="State/Country"
                                            name={'StateCounty'}
                                            onChange={(e) => onFormChange(e)}
                                        />
                                        <TextField
                                            required
                                            label="Postcode"
                                            name={'PostCode'}
                                            onChange={(e) => onFormChange(e)}
                                        />
                                        <TextField
                                            required
                                            label="Country"
                                            name={'Country'}
                                            onChange={(e) => onFormChange(e)}
                                        />
                                    </div>
                                </>
                            }
                            <Button
                                type={'submit'}
                                startIcon={<SubmitIcon />}
                                className="contact-button-submit"
                                text="Submit"
                                onClick={() => { }}
                            />
                        </form>
                    }
                </div>
            </div>
            <div className="contact-background-img" />
            <Footer />
        </>
    )
}