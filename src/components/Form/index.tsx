import React, { useRef, useState } from 'react';
import "./inquiryform.css"
const InquiryForm: React.FC = () => {
    const brandListRef = useRef<HTMLDivElement>(null);
    const [selectedBrand, setSelectedBrand] = useState<string>('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
    const handleBrandClick = (event: React.MouseEvent) => {
        const brandDiv = (event.target as HTMLElement).closest('.brand') as HTMLElement;
        if (brandDiv) {
          // Remove selected class from all brands
          const brands = brandListRef.current?.querySelectorAll('.brand');
          brands?.forEach(brand => brand.classList.remove('selected'));
      
          // Add selected class to clicked brand
          brandDiv.classList.add('selected');
      
          // Set selected brand
          setSelectedBrand(brandDiv.dataset.brand as string);
          setErrors(prev => ({ ...prev, brand: '' })); // Clear brand error
        }
      };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      const newErrors: { [key: string]: string } = {};
      const form = event.currentTarget as HTMLFormElement;
  
      // Validation checks
      if (!selectedBrand) {
        newErrors.brand = 'Please select a brand';
      }
      if (!form.fullName.value) {
        newErrors.fullName = 'Full name is required';
      }
      if (!form.email.value) {
        newErrors.email = 'Email is required';
      }
      if (!form.mobile.value) {
        newErrors.mobile = 'Mobile is required';
      }
      if (!form.product.value) {
        newErrors.product = 'Please select a product';
      }
      if (!form.quantity.value) {
        newErrors.quantity = 'Quantity is required';
      }
      if (!form.shippingTo.value) {
        newErrors.shippingTo = 'Shipping location is required';
      }
  
      setErrors(newErrors);
  
      // If no errors, process form submission
      if (Object.keys(newErrors).length === 0) {
        const formData = new FormData(form);
        formData.append('brand', selectedBrand);
        console.log(Object.fromEntries(formData.entries()));
        alert('Form submitted successfully!');
      }
    };
  
  return (
    <section style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' , marginBottom:"100px"}}>
      <p style={{ color: 'white', marginBottom: '40px', marginTop: '100px' , fontWeight:"700", fontSize:"50px", paddingLeft:"5px"}}>
        Send an inquiry for an exclusive offer
      </p>
      <form id="inquiryForm" style={{ paddingBottom: '100px' }}>
        {/* Full Name, Email, Mobile */}
        <div className="form-row">
          <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label className="label-form" htmlFor="fullName">
              Full Name <span className="required">*</span>
            </label>
            <input type="text" id="fullName" name="fullName" required className="input-form" placeholder="Full name here" />
            {errors.fullName && <div className="error">{errors.fullName}</div>}
          </div>
          <div className="form-group">
            <label className="label-form" htmlFor="email">
              Email Address <span className="required">*</span>
            </label>
            <input type="email" id="email" name="email" required className="input-form" placeholder="Add email" />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="label-form" htmlFor="mobile">
              Mobile <span className="required">*</span>
            </label>
            <input type="number" id="mobile" name="mobile" required placeholder="Add your phone number" className="input-form" />
            {errors.mobile && <div className="error">{errors.mobile}</div>}
          </div>

          {/* Company Name (Optional) */}
          <div className="form-group">
            <label className="label-form" htmlFor="companyName">
              Company Name 
            </label>
            <input type="text" id="companyName" name="companyName" className="input-form" placeholder="Company name here" />
          </div>
        </div>
        {/* Select Brand */}
        <div className="form-group">
          <label className="label-form">
            Select Brand <span className="required">*</span>
          </label>
          <div className="brand-list" id="brandList" ref={brandListRef} onClick={handleBrandClick}>
            {/* <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}> */}
            <div style={{display:"flex", gap:"15px"}}>
              <div className="brand" data-brand="Brand A">
                <img src="https://bmgfzco.net/wp-content/uploads/2022/07/apple-logo.webp" alt="Brand A" width="80" />
              </div>
              <div className="brand" data-brand="Brand B">
                <img src="https://bmgfzco.net/wp-content/uploads/2022/07/samsung-logo.webp" alt="Brand B" width="80" />
              </div>
              <div className="brand" data-brand="Brand C">
                <img src="https://bmgfzco.net/wp-content/uploads/2022/07/xiaomi-logo.webp" alt="Brand C" width="80" />
              </div>
              <div className="brand" data-brand="Brand D">
                <img src="https://bmgfzco.net/wp-content/uploads/2022/07/nokia-logo.webp" alt="Brand D" width="80" />
              </div>
              </div>
              <div style={{display:"flex", gap:"15px"}}>
            
              <div className="brand" data-brand="Brand E">
                <img src="https://bmgfzco.net/wp-content/uploads/2022/07/oppo-logo.webp" alt="Brand E" width="80" />
              </div>
              <div className="brand" data-brand="Brand F">
                <img src="https://bmgfzco.net/wp-content/uploads/2022/07/sandisk-logo.webp" alt="Brand F" width="80" />
              </div>
              <div className="brand" data-brand="Brand G">
                <img src="https://bmgfzco.net/wp-content/uploads/2022/07/realme-logo.webp" alt="Brand G" width="80" />
              </div>
              <div className="brand" data-brand="Brand H">
                <img src="https://bmgfzco.net/wp-content/uploads/2022/07/jbl-logo.webp" alt="Brand H" width="80" />
              </div>
              </div>
              <div style={{display:"flex", gap:"15px"}}>
              <div className="brand" data-brand="Brand K">
                <img src="https://bmgfzco.net/wp-content/uploads/2022/09/sony-logo.webp" alt="Brand K" width="80" />
              </div>
              <div className="brand" data-brand="Brand L">
                <img src="https://bmgfzco.net/wp-content/uploads/2023/08/infinix-logo.webp" alt="Brand L" width="80" />
              </div>
              </div>
            </div>
          </div>
          {errors.brand && <div className="error">{errors.brand}</div>}
        {/* </div> */}

        <div className="form-row">
          {/* Select Product */}
          <div className="form-group">
            <label className="label-form" htmlFor="product">
              Choose Product <span className="required">*</span>
            </label>
            <select id="product" name="product" required className="input-form">
              <option value="" style={{ color: 'rgb(147, 147, 147)' }}>
                Select a product
              </option>
              <option value="mobile-phones">Mobile Phones</option>
              <option value="smartphone-accessories">Smartphone Accessories</option>
              <option value="home-appliances">Home Appliances</option>
              <option value="sound-devices">Sound Devices</option>
              <option value="gaming-consoles">Gaming Consoles</option>
            </select>
            {errors.product && <div className="error">{errors.product}</div>}
          </div>

          {/* Select Quantity */}
          <div className="form-group">
            <label className="label-form" htmlFor="quantity">
              Select Quantity <span className="required">*</span>
            </label>
            <input type="number" id="quantity" name="quantity" required className="input-form" placeholder="Number" />
            {errors.quantity && <div className="error">{errors.quantity}</div>}
          </div>
        </div>
        <div className="form-row">
          {/* Shipping To */}
          <div className="form-group">
            <label className="label-form" htmlFor="shippingTo">
              Shipping To <span className="required">*</span>
            </label>
            <input type="text" id="shippingTo" name="shippingTo" required placeholder="Example: USA" className="input-form" />
            {errors.shippingTo && <div className="error">{errors.shippingTo}</div>}
          </div>

          {/* Target Price (Optional) */}
          <div className="form-group">
            <label className="label-form" htmlFor="targetPrice">
              Target Price 
            </label>
            <input type="number" id="targetPrice" name="targetPrice" placeholder="Number" className="input-form" />
          </div>
        </div>

        {/* Comments/Questions */}
        <div className="form-group">
          <label className="label-form" htmlFor="comments">
            Comments/Questions
          </label>
          <textarea id="comments" name="comments" className="input-form"></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            backgroundColor: 'rgb(57, 112, 255)',
            padding: '10px 20px',
            borderRadius: '8px',
            color: 'white',
            border: 'none',
          }}
        >
          Send Inquiry
        </button>
      </form>
    </section>
  );
};

export default InquiryForm;
