const baseUrl = 'https://interview-assessment.api.avamae.co.uk';

export const BannerService = {
    getBannerContent: async () => {
        try {
            const response = await fetch(`${baseUrl}/api/v1/home/banner-details`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const json = await response.json();
            return Promise.resolve(json);
        } catch (e) {
            return Promise.reject('Banner api request failed!');
        }
    },
}

export const ContactUsService = {
    postContactForm: async (formData: any) => {
        try {
            const response = await fetch(`${baseUrl}/api/v1/contact-us/submit`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8;'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const json = await response.json();
            return Promise.resolve(json);
        } catch (e) {
            return Promise.reject('Contact api request failed!');
        }
    },
}