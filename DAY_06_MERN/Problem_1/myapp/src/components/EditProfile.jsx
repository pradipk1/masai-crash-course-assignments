import React, { useState } from 'react'

function EditProfile({user}) {
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        bio: user.bio
    });

  return (
    <div>
        <h2>Edit Profile</h2>
        <div>
            <div>
                <label>Name</label><br />
                <input type="text" value={formData.name} 
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            name: e.target.value
                        });
                    }}
                />
            </div>
            <br />
            
            <div>
                <label>Email</label><br />
                <input type="email" value={formData.email} 
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            email: e.target.value
                        });
                    }}
                />
            </div>
            <br />
            
            <div>
                <label>Bio</label><br />
                <input type="text" value={formData.bio} 
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            bio: e.target.value
                        });
                    }}
                />
            </div>
        </div>
    </div>
  )
}

export default EditProfile;