export interface BannerDetailsMin {
    Title: string,
    Subtitle: string;
    ImageUrl: string;
}

export interface BannerDetailsModel {
    Details: [
        {
            Title: string,
            Subtitle: string;
            ImageUrl: string;
        }
    ],
    Status: string,
    Errors: [
        {
            FieldName: string,
            MessageCode: string,
        }
    ]
}

export interface ContactUsModel {
    FullName: string,
    EmailAddress: string,
    PhoneNumbers: [
        string
    ],
    Message: string,
    bIncludeAddressDetails: boolean,
    AddressDetails: {
        AddressLine1: string,
        AddressLine2: string,
        CityTown: string,
        StateCounty: string,
        Postcode: string,
        Country: string,
    }
}