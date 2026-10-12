# Assignment #4: Forms and Validation

- **Student:** [Your Full Name]
- **Group:** [Your Group]
- **Live Demo:** [GitHub Pages / Netlify URL]

---

## Project Overview
This project was developed for the Front-End Development course. The main goal is to demonstrate how to create user-friendly web forms, structure them cleanly across multiple pages, apply responsive design with Bootstrap 5, and implement both HTML5 native and Bootstrap validation mechanisms.

## Project Structure
The repository is organized into multi-page views connected through a common Bootstrap navigation bar:

- **`index.html` (Part 1: Basic HTML Forms)**
  - Implements a basic contact form with inputs for Name, Email, and Message.
  - Utilizes native HTML5 validation constraints (`required`, `type="email"`, `minlength`, `maxlength`).
  - Tested against browser-enforced validation rules for empty and invalid inputs.

- **`bootstrap.html` (Part 2: Bootstrap Forms & Validation)**
  - Re-implements the contact form styled with Bootstrap 5 components and the grid system.
  - Adds helpful placeholder texts and field descriptions (`form-text`).
  - Utilizes Bootstrap feedback styles (`valid-feedback`, `invalid-feedback`) and visual cues.

- **`register.html` (Part 3: Advanced Registration Form)**
  - A responsive registration form with grid layout.
  - Contains all required input types:
    - First Name & Last Name (text inputs)
    - Email address
    - Password & Confirm Password (with matching check)
    - Gender (radio buttons)
    - Hobbies (checkboxes with at least one required selection)
    - Country (select dropdown)
    - Submit & Reset buttons
  - Full client-side validation logic with custom error handling.

- **`js/script.js`**
  - Handles client-side validation using Bootstrap's `needs-validation` / `was-validated` pattern.
  - Verifies that passwords match and ensures at least one hobby checkbox is selected before submission.

---


