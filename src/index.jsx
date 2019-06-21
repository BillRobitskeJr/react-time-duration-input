import React from 'react'
import { render } from 'react-dom'
import TimeDurationInput from './components/TimeDurationInput'

render((
  <div className='col'>
    <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous' />
    <h1>&lt;TimeDurationInput&gt; Samples</h1>
    <section className='card mt-2'>
      <header className='card-header h5'>Basic Usage</header>
      <div className='card-body'>
        <p><TimeDurationInput value={2443332000} /></p>
      </div>
      <footer className='card-footer'>
        <code>&lt;TimeDurationInput value="2443332000" /&gt;</code>
      </footer>
    </section>
    <section className='card mt-2'>
      <header className='card-header h5'>Custom Class</header>
      <div className='card-body'>
        <p><TimeDurationInput value={2443332000} className='form-control' /></p>
      </div>
      <footer className='card-footer'>
        <code>&lt;TimeDurationInput value="2443332000" className="form-control" /&gt;</code>
      </footer>
    </section>
  </div>
), document.getElementById('root'))
