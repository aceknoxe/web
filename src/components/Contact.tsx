import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key in keyof FormData]?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors: { [key in keyof FormData]?: string } = {};
    tempErrors.name = formData.name ? '' : 'Name is required';
    tempErrors.email = formData.email ? '' : 'Email is required';
    tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      ? ''
      : 'Email is not valid';
    tempErrors.message = formData.message ? '' : 'Message is required';
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      try {
        const templateParams = {
          name: formData.name,
          email: formData.email,
          message: formData.message
        };

        // Log the template parameters
        console.log("Sending email with parameters:", templateParams);

        const result = await emailjs.send(
          '', // replace with your EmailJS service ID
          '', // replace with your EmailJS template ID
          templateParams,
          ''
        );

        if (result.status === 200) {
          setIsSubmitted(true);
          setFormData({
            name: '',
            email: '',
            message: ''
          });
          setErrors({});
        } else {
          console.error('Failed to submit');
        }
      } catch (error) {
        console.error('Error submitting form', error);
      }
    } else {
      console.log('Validation failed', errors);
    }
  };

  return (
    <div className="bg-opacity-50 bg-emerald-50 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg p-8 rounded-lg shadow-md text-center mt-3">
        <h1 className="mt-8 py-1 text-5xl font-semibold text-center bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-transparent">
          Contact us
        </h1>
        <p className="mt-6 text-center text-gray-700">
          Email us at example.ac.in or message us here:
        </p>

        <form onSubmit={handleSubmit} className="mt-10">
          <div className="grid gap-6 sm:grid-cols-1">
            <div className="relative z-0 mb-5">
              <input
                type="text"
                name="name"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-green-500 focus:outline-none focus:ring-0"
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
              />
              <label className="absolute left-0 top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-green-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-800">
                Name
              </label>
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="relative z-0 mb-5">
              <input
                type="email"
                name="email"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-green-500 focus:outline-none focus:ring-0"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
              />
              <label className="absolute left-0 top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-green-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-800">
                Email
              </label>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="relative z-0 mb-5">
              <textarea
                name="message"
                rows={5}
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-3 px-0 text-sm text-gray-900 focus:border-green-500 focus:outline-none focus:ring-0"
                placeholder=" "
                value={formData.message}
                onChange={handleChange}
              />
              <label className="absolute left-0 top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-green-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-800">
                Message
              </label>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 w-full rounded-2xl bg-green-500 px-10 py-2 text-white hover:bg-green-600 focus:outline-none focus:bg-green-600"
          >
            Send Message
          </button>
          {isSubmitted && (
            <p className="text-green-500 mt-4 text-center">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
