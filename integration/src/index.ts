import { Doctor } from '@hospital-dk/doctor';
import { Patient } from '@hospital-dk/patient';
import { Scheduler } from '@hospital-dk/scheduler';

const doctor = new Doctor();
doctor.hi();

const patient = new Patient();
patient.hi();

const scheduler = new Scheduler();
scheduler.hi();

console.log('hello, 20240321');
