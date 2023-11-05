import React from 'react'

const Admin = () => {
  return (
    <div>
      <div className='container'>
      <br />
    <form method='POST' action='http://localhost:2000'>
  <div className="form-group">
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="First name" name='name'/>
  </div>
  <br />
  <div className="form-group">
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Last name" name='lastname'/>
  </div>
  <br />
  <div className="form-group">
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Username" name='username'/>
  </div>
  <br />
  <div className="form-group">
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Email adress" name='email'/>
  </div>
  <br />
  <div className="form-group">
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Password" name='password'/>
  </div>
  <br />
  <div className="form-group">
  <input type="submit" className="" value={"Submit"}/>
  </div>
  <br />
  
</form>

    </div>
    </div>
  )
}

export default Admin
