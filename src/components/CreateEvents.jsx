import React, { useState } from 'react';
import styles from '../style';

const CreateEvents = () => {

    const [formData, setFormData] = useState({
        hostName: '',
        email: '',
        phone: '',
        description: '',
        weblink: '',
        hostLogo: '',
        facebook: '',
        instagram: '',
        x: '',
        website: '',
        bankingdetails: '',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData); // You can perform form submission logic here





        try {
            const response = await axios.post('http://127.0.0.1:3000/createevent', formData);
            console.log('Create event successful:', response.data);
            // Cookies.set('isLoggedIn', 'true', { expires: 1 }); // Expires in 1 day
            // navigate('/account'); 
            // Optionally, you can redirect the user or perform other actions for successful registration
          } catch (error) {
            console.error('Registration failed:', error);
            // Optionally, you can handle the error or display an error message to the user
          }














        // Reset form after submission
        setFormData({
        hostName: '',
        email: '',
        phone: '',
        description: '',
        weblink: '',
        hostLogo: '',
        facebook: '',
        instagram: '',
        x: '',
        website: '',
        bankingdetails: '',
        });
    };

  return (
    <div className="max-w-lg md:max-w-xl lg:max-w-4xl mx-auto mt-4 py-10 bg-white rounded-3xl ">
      <h1 className={`text-black ${styles.heading2} mb-10`}>Create Host Account</h1>
      <div className='mb-4'>
        <p className={`${styles.paragraph} mb-2`}>Personal Details</p>
        <p className={`${styles.paragraph} mb-4`}>Your contact information is kept private and shown only to attendees who book a ticket</p>
      </div>
      <form onSubmit={handleSubmit} method="POST" className='my-5' enctype="multipart/form-data">
        <div className='mb-10'>
            <div className="mb-4">
                <label htmlFor="hostName" className="block text-sm font-medium text-gray-600">
                    Host Name
                </label>
                <input type="text" id="hostName" name="hostName" value={formData.hostName} 
                    onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" required
                />
            </div>
            <div className='lg:flex flex-1'>
                <div className="mb-4 pr-5 flex-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} 
                        onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" required
                    />
                </div>
                <div className="mb-4 flex-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                        Phone Number
                    </label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} 
                        onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" required
                    />
                </div>

            </div>
            <div className='lg:flex flex-1 '>
                <div className="mb-4 mr-5 flex-1">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                    Description
                    </label>
                    <textarea name="description" id="" cols="30" rows="5"  
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    value={formData.description} onChange={handleChange} required>
                    </textarea>
                </div>
                <div className='flex flex-1 flex-col'>
                    <div className="mb-4">
                        <label htmlFor="weblink" className="block text-sm font-medium text-gray-600">
                            Event Website Link
                        </label>
                        <input type="url" id="weblink" name="weblink" value={formData.weblink} 
                            onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="hostLogo" className="block text-sm font-medium text-gray-600">
                            Upload Host Logo
                        </label>
                        <input type="file" id="hostLogo" name="hostLogo" value={formData.hostLogo} 
                            onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" required
                        />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <p className={`${styles.paragraph} mb-2`}>Other Information</p>
            <div className='lg:flex flex-1 '>
            <div className='flex flex-1 flex-col'>
                    <div className="mb-4 mr-5">
                        <label htmlFor="facebook" className="block text-sm font-medium text-gray-600">
                            Facebook
                        </label>
                        <input type="url" id="facebook" name="facebook" value={formData.facebook} 
                            onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" required
                        />
                    </div>
                    <div className="mb-4 mr-5">
                        <label htmlFor="instagram" className="block text-sm font-medium text-gray-600">
                            Instagram
                        </label>
                        <input type="url" id="instagram" name="instagram" value={formData.instagram} 
                            onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" required
                        />
                    </div>
                </div>
                <div className='flex flex-1 flex-col'>
                    <div className="mb-4">
                        <label htmlFor="x" className="block text-sm font-medium text-gray-600">
                            X
                        </label>
                        <input type="url" id="x" name="x" value={formData.x} 
                            onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="website" className="block text-sm font-medium text-gray-600">
                            Website
                        </label>
                        <input type="url" id="website" name="website" value={formData.x} 
                            onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded w-full" required
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className='text-right justify-end'>
            <button
                type="submit"
                className=" bg-white hover:bg-customPurple hover:text-white heading-text px-4 py-2 text-[18px] border-solid border-2 rounded-2xl transition-colors w-md"
                >
                Save
            </button>

        </div>
        <div className="my-4">
            <label htmlFor="bankingdetails" className="block text-sm font-medium text-gray-600 mb-4 font">
            Banking Details
            </label>
            <textarea name="bankingdetails" id="" cols="30" rows="5"  
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            value={formData.bankingdetails} onChange={handleChange} required>
            </textarea>
        </div>
        <div className='text-right justify-end'>
            <button
                type="submit"
                className=" bg-white hover:bg-customPurple hover:text-white heading-text px-4 py-2 text-[18px] border-solid border-2 rounded-2xl transition-colors w-md"
                >
                Create Account
            </button>
        </div>
      </form>
    </div>
  )
}

export default CreateEvents