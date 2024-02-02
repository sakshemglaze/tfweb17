@charset "UTF-8";

/*!
 * Bootstrap  v5.2.3 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors
 * Copyright 2011-2022 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)*/

:root {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-black: #000;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-gray-100: #f8f9fa;
  --bs-gray-200: #e9ecef;
  --bs-gray-300: #dee2e6;
  --bs-gray-400: #ced4da;
  --bs-gray-500: #adb5bd;
  --bs-gray-600: #6c757d;
  --bs-gray-700: #495057;
  --bs-gray-800: #343a40;
  --bs-gray-900: #212529;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-primary-rgb: 13,110,253;
  --bs-secondary-rgb: 108,117,125;
  --bs-success-rgb: 25,135,84;
  --bs-info-rgb: 13,202,240;
  --bs-warning-rgb: 255,193,7;
  --bs-danger-rgb: 220,53,69;
  --bs-light-rgb: 248,249,250;
  --bs-dark-rgb: 33,37,41;
  --bs-white-rgb: 255,255,255;
  --bs-black-rgb: 0,0,0;
  --bs-body-color-rgb: 33,37,41;
  --bs-body-bg-rgb: 255,255,255;
  --bs-font-sans-serif: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;
  --bs-body-color: #212529;
  --bs-body-bg: #fff;
  --bs-border-width: 1px;
  --bs-border-style: solid;
  --bs-border-color: #dee2e6;
  --bs-border-color-translucent: rgba(0, 0, 0, 0.175);
  --bs-border-radius: 0.375rem;
  --bs-border-radius-sm: 0.25rem;
  --bs-border-radius-lg: 0.5rem;
  --bs-border-radius-xl: 1rem;
  --bs-border-radius-2xl: 2rem;
  --bs-border-radius-pill: 50rem;
  --bs-link-color: #0d6efd;
  --bs-link-hover-color: #0a58ca;
  --bs-code-color: #d63384;
  --bs-highlight-bg: #fff3cd;
}

*,::after,::before {
  box-sizing: border-box;
}

@media (prefers-reduced-motion:no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}

body {
  margin: 0;
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
  background-color: var(--bs-body-bg);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}

.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6 {
  margin-top: 0;
  margin-bottom: .5rem;
  font-weight: 500;
  line-height: 1.2;
}

.h1,h1 {
  font-size: calc(1.375rem + 1.5vw);
}

@media (min-width:1200px) {
  .h1,  h1 {
    font-size: 2.5rem;
  }
}

.h2,h2 {
  font-size: calc(1.325rem + .9vw);
}

@media (min-width:1200px) {
  .h2,  h2 {
    font-size: 2rem;
  }
}

.h3,h3 {
  font-size: calc(1.3rem + .6vw);
}

@media (min-width:1200px) {
  .h3,  h3 {
    font-size: 1.75rem;
  }
}

.h4,h4 {
  font-size: calc(1.275rem + .3vw);
}

@media (min-width:1200px) {
  .h4,  h4 {
    font-size: 1.5rem;
  }
}

.h5,h5 {
  font-size: 1.2rem;
}

.h6,h6 {
  font-size: 1rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol,ul {
  padding-left: 2rem;
}

ol,ul {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,ol ul,ul ol,ul ul {
  margin-bottom: 0;
}

sub {
  position: relative;
  font-size: .75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -.25em;
}

a {
  color: var(--bs-link-color);
  text-decoration: underline;
}

a:hover {
  color: var(--bs-link-hover-color);
}

a:not([href]):not([class]),a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}

img {
  vertical-align: middle;
}

label {
  display: inline-block;
}

button {
  border-radius: 0;
}

button:focus:not(:focus-visible) {
  outline: 0;
}

button,input,select {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,select {
  text-transform: none;
}

[role=button] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}

select:disabled {
  opacity: 1;
}

[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator {
  display: none!important;
}

[type=button],[type=reset],[type=submit],button {
  -webkit-appearance: button;
}

[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled) {
  cursor: pointer;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field {
  padding: 0;
}

::-webkit-inner-spin-button {
  height: auto;
}

[type=search] {
  outline-offset: -2px;
  -webkit-appearance: textfield;
}

::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-color-swatch-wrapper {
  padding: 0;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

::file-selector-button {
  font: inherit;
  -webkit-appearance: button;
}

[hidden] {
  display: none!important;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.container,.container-lg,.container-md,.container-sm {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * .5);
  padding-left: calc(var(--bs-gutter-x) * .5);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width:576px) {
  .container,  .container-sm {
    max-width: 540px;
  }
}

@media (min-width:768px) {
  .container,  .container-md,  .container-sm {
    max-width: 720px;
  }
}

@media (min-width:992px) {
  .container,  .container-lg,  .container-md,  .container-sm {
    max-width: 960px;
  }
}

@media (min-width:1200px) {
  .container,  .container-lg,  .container-md,  .container-sm {
    max-width: 1140px;
  }
}

@media (min-width:1400px) {
  .container,  .container-lg,  .container-md,  .container-sm {
    max-width: 1320px;
  }
}

.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-.5 * var(--bs-gutter-x));
  margin-left: calc(-.5 * var(--bs-gutter-x));
}

.row>* {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * .5);
  padding-left: calc(var(--bs-gutter-x) * .5);
  margin-top: var(--bs-gutter-y);
}

.col {
  flex: 1 0 0%;
}

.col-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}

.col-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}

.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.col-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}

.col-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}

.col-6 {
  flex: 0 0 auto;
  width: 50%;
}

.col-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}

.col-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}

.col-9 {
  flex: 0 0 auto;
  width: 75%;
}

.col-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}

.col-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

@media (min-width:576px) {
  .col-sm {
    flex: 1 0 0%;
  }

  .col-sm-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-sm-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-sm-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-sm-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-sm-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-sm-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-sm-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }
}

@media (min-width:768px) {
  .col-md {
    flex: 1 0 0%;
  }

  .col-md-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-md-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-md-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-md-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }
}

@media (min-width:992px) {
  .col-lg {
    flex: 1 0 0%;
  }

  .col-lg-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-lg-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-lg-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-lg-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }
}

.form-label {
  margin-bottom: .5rem;
}

.col-form-label {
  padding-top: calc(.375rem + 1px);
  padding-bottom: calc(.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}

.col-form-label-lg {
  padding-top: calc(.5rem + 1px);
  padding-bottom: calc(.5rem + 1px);
  font-size: 1.25rem;
}

.col-form-label-sm {
  padding-top: calc(.25rem + 1px);
  padding-bottom: calc(.25rem + 1px);
  font-size: .875rem;
}

.form-text {
  margin-top: .25rem;
  font-size: .875em;
  color: #6c757d;
}

.form-control {
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: .375rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

@media (prefers-reduced-motion:reduce) {
  .form-control {
    transition: none;
  }
}

.form-control[type=file] {
  overflow: hidden;
}

.form-control[type=file]:not(:disabled):not([readonly]) {
  cursor: pointer;
}

.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 .25rem rgba(13,110,253,.25);
}

.form-control::-webkit-date-and-time-value {
  height: 1.5em;
}

.form-control::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control:disabled {
  background-color: #e9ecef;
  opacity: 1;
}

.form-control::-webkit-file-upload-button {
  padding: .375rem .75rem;
  margin: -.375rem -.75rem;
  -webkit-margin-end: .75rem;
  margin-inline-end: .75rem;
  color: #212529;
  background-color: #e9ecef;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  -webkit-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.form-control::file-selector-button {
  padding: .375rem .75rem;
  margin: -.375rem -.75rem;
  -webkit-margin-end: .75rem;
  margin-inline-end: .75rem;
  color: #212529;
  background-color: #e9ecef;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

@media (prefers-reduced-motion:reduce) {
  .form-control::-webkit-file-upload-button {
    -webkit-transition: none;
    transition: none;
  }

  .form-control::file-selector-button {
    transition: none;
  }
}

.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
  background-color: #dde0e3;
}

.form-control:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: #dde0e3;
}

.form-control-sm {
  min-height: calc(1.5em + .5rem + 2px);
  padding: .25rem .5rem;
  font-size: .875rem;
  border-radius: .25rem;
}

.form-control-sm::-webkit-file-upload-button {
  padding: .25rem .5rem;
  margin: -.25rem -.5rem;
  -webkit-margin-end: .5rem;
  margin-inline-end: .5rem;
}

.form-control-sm::file-selector-button {
  padding: .25rem .5rem;
  margin: -.25rem -.5rem;
  -webkit-margin-end: .5rem;
  margin-inline-end: .5rem;
}

.form-control-lg {
  min-height: calc(1.5em + 1rem + 2px);
  padding: .5rem 1rem;
  font-size: 1.25rem;
  border-radius: .5rem;
}

.form-control-lg::-webkit-file-upload-button {
  padding: .5rem 1rem;
  margin: -.5rem -1rem;
  -webkit-margin-end: 1rem;
  margin-inline-end: 1rem;
}

.form-control-lg::file-selector-button {
  padding: .5rem 1rem;
  margin: -.5rem -1rem;
  -webkit-margin-end: 1rem;
  margin-inline-end: 1rem;
}

.form-select {
  display: block;
  width: 100%;
  padding: .375rem 2.25rem .375rem .75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right .75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: .375rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

@media (prefers-reduced-motion:reduce) {
  .form-select {
    transition: none;
  }
}

.form-select:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 .25rem rgba(13,110,253,.25);
}

.form-select[multiple],.form-select[size]:not([size="1"]) {
  padding-right: .75rem;
  background-image: none;
}

.form-select:disabled {
  background-color: #e9ecef;
}

.form-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #212529;
}

.form-select-sm {
  padding-top: .25rem;
  padding-bottom: .25rem;
  padding-left: .5rem;
  font-size: .875rem;
  border-radius: .25rem;
}

.form-select-lg {
  padding-top: .5rem;
  padding-bottom: .5rem;
  padding-left: 1rem;
  font-size: 1.25rem;
  border-radius: .5rem;
}

.form-check {
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5em;
  margin-bottom: .125rem;
}

.form-check .form-check-input {
  float: left;
  margin-left: -1.5em;
}

.form-check-input {
  width: 1em;
  height: 1em;
  margin-top: .25em;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid rgba(0,0,0,.25);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  print-color-adjust: exact;
}

.form-check-input[type=checkbox] {
  border-radius: .25em;
}

.form-check-input[type=radio] {
  border-radius: 50%;
}

.form-check-input:active {
  filter: brightness(90%);
}

.form-check-input:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 .25rem rgba(13,110,253,.25);
}

.form-check-input:checked {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.form-check-input:checked[type=checkbox] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
}

.form-check-input:checked[type=radio] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
}

.form-check-input[type=checkbox]:indeterminate {
  background-color: #0d6efd;
  border-color: #0d6efd;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
}

.form-check-input:disabled {
  pointer-events: none;
  filter: none;
  opacity: .5;
}

.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label {
  cursor: default;
  opacity: .5;
}

.btn-check {
  position: absolute;
  clip: rect(0,0,0,0);
  pointer-events: none;
}

.btn-check:disabled+.btn,.btn-check[disabled]+.btn {
  pointer-events: none;
  filter: none;
  opacity: .65;
}

.form-range {
  width: 100%;
  height: 1.5rem;
  padding: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.form-range:focus {
  outline: 0;
}

.form-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25);
}

.form-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25);
}

.form-range::-moz-focus-outer {
  border: 0;
}

.form-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -.25rem;
  background-color: #0d6efd;
  border: 0;
  border-radius: 1rem;
  -webkit-transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  -webkit-appearance: none;
  appearance: none;
}

@media (prefers-reduced-motion:reduce) {
  .form-range::-webkit-slider-thumb {
    -webkit-transition: none;
    transition: none;
  }
}

.form-range::-webkit-slider-thumb:active {
  background-color: #b6d4fe;
}

.form-range::-webkit-slider-runnable-track {
  width: 100%;
  height: .5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}

.form-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #0d6efd;
  border: 0;
  border-radius: 1rem;
  -moz-transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  -moz-appearance: none;
  appearance: none;
}

@media (prefers-reduced-motion:reduce) {
  .form-range::-moz-range-thumb {
    -moz-transition: none;
    transition: none;
  }
}

.form-range::-moz-range-thumb:active {
  background-color: #b6d4fe;
}

.form-range::-moz-range-track {
  width: 100%;
  height: .5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}

.form-range:disabled {
  pointer-events: none;
}

.form-range:disabled::-webkit-slider-thumb {
  background-color: #adb5bd;
}

.form-range:disabled::-moz-range-thumb {
  background-color: #adb5bd;
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}

.input-group>.form-control,.input-group>.form-select {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}

.input-group>.form-control:focus,.input-group>.form-select:focus {
  z-index: 5;
}

.input-group .btn {
  position: relative;
  z-index: 2;
}

.input-group .btn:focus {
  z-index: 5;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: .375rem;
}

.input-group-lg>.btn,.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text {
  padding: .5rem 1rem;
  font-size: 1.25rem;
  border-radius: .5rem;
}

.input-group-sm>.btn,.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text {
  padding: .25rem .5rem;
  font-size: .875rem;
  border-radius: .25rem;
}

.input-group-lg>.form-select,.input-group-sm>.form-select {
  padding-right: 3rem;
}

.btn {
  --bs-btn-padding-x: 0.75rem;
  --bs-btn-padding-y: 0.375rem;
  --bs-btn-font-family: ;
  --bs-btn-font-size: 1rem;
  --bs-btn-font-weight: 400;
  --bs-btn-line-height: 1.5;
  --bs-btn-color: #212529;
  --bs-btn-bg: transparent;
  --bs-btn-border-width: 1px;
  --bs-btn-border-color: transparent;
  --bs-btn-border-radius: 0.375rem;
  --bs-btn-hover-border-color: transparent;
  --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),0 1px 1px rgba(0, 0, 0, 0.075);
  --bs-btn-disabled-opacity: 0.65;
  --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
  display: inline-block;
  padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
  font-family: var(--bs-btn-font-family);
  font-size: var(--bs-btn-font-size);
  font-weight: var(--bs-btn-font-weight);
  line-height: var(--bs-btn-line-height);
  color: var(--bs-btn-color);
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
  border-radius: var(--bs-btn-border-radius);
  background-color: var(--bs-btn-bg);
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

@media (prefers-reduced-motion:reduce) {
  .btn {
    transition: none;
  }
}

.btn:hover {
  color: var(--bs-btn-hover-color);
  background-color: var(--bs-btn-hover-bg);
  border-color: var(--bs-btn-hover-border-color);
}

.btn-check+.btn:hover {
  color: var(--bs-btn-color);
  background-color: var(--bs-btn-bg);
  border-color: var(--bs-btn-border-color);
}

.btn:focus-visible {
  color: var(--bs-btn-hover-color);
  background-color: var(--bs-btn-hover-bg);
  border-color: var(--bs-btn-hover-border-color);
  outline: 0;
  box-shadow: var(--bs-btn-focus-box-shadow);
}

.btn-check:focus-visible+.btn {
  border-color: var(--bs-btn-hover-border-color);
  outline: 0;
  box-shadow: var(--bs-btn-focus-box-shadow);
}

.btn-check:checked+.btn,.btn.active,.btn.show,.btn:first-child:active,:not(.btn-check)+.btn:active {
  color: var(--bs-btn-active-color);
  background-color: var(--bs-btn-active-bg);
  border-color: var(--bs-btn-active-border-color);
}

.btn-check:checked+.btn:focus-visible,.btn.active:focus-visible,.btn.show:focus-visible,.btn:first-child:active:focus-visible,:not(.btn-check)+.btn:active:focus-visible {
  box-shadow: var(--bs-btn-focus-box-shadow);
}

.btn:disabled {
  color: var(--bs-btn-disabled-color);
  pointer-events: none;
  background-color: var(--bs-btn-disabled-bg);
  border-color: var(--bs-btn-disabled-border-color);
  opacity: var(--bs-btn-disabled-opacity);
}

.btn-primary {
  --bs-btn-color: #fff;
  --bs-btn-bg: #0d6efd;
  --bs-btn-border-color: #0d6efd;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #0b5ed7;
  --bs-btn-hover-border-color: #0a58ca;
  --bs-btn-focus-shadow-rgb: 49,132,253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #0a58ca;
  --bs-btn-active-border-color: #0a53be;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #0d6efd;
  --bs-btn-disabled-border-color: #0d6efd;
}

.btn-dark {
  --bs-btn-color: #fff;
  --bs-btn-bg: #212529;
  --bs-btn-border-color: #212529;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #424649;
  --bs-btn-hover-border-color: #373b3e;
  --bs-btn-focus-shadow-rgb: 66,70,73;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #4d5154;
  --bs-btn-active-border-color: #373b3e;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #212529;
  --bs-btn-disabled-border-color: #212529;
}

.btn-link {
  --bs-btn-font-weight: 400;
  --bs-btn-color: var(--bs-link-color);
  --bs-btn-bg: transparent;
  --bs-btn-border-color: transparent;
  --bs-btn-hover-color: var(--bs-link-hover-color);
  --bs-btn-hover-border-color: transparent;
  --bs-btn-active-color: var(--bs-link-hover-color);
  --bs-btn-active-border-color: transparent;
  --bs-btn-disabled-color: #6c757d;
  --bs-btn-disabled-border-color: transparent;
  --bs-btn-box-shadow: none;
  --bs-btn-focus-shadow-rgb: 49,132,253;
  text-decoration: underline;
}

.btn-link:focus-visible {
  color: var(--bs-btn-color);
}

.btn-link:hover {
  color: var(--bs-btn-hover-color);
}

.btn-group-lg>.btn,.btn-lg {
  --bs-btn-padding-y: 0.5rem;
  --bs-btn-padding-x: 1rem;
  --bs-btn-font-size: 1.25rem;
  --bs-btn-border-radius: 0.5rem;
}

.btn-group-sm>.btn,.btn-sm {
  --bs-btn-padding-y: 0.25rem;
  --bs-btn-padding-x: 0.5rem;
  --bs-btn-font-size: 0.875rem;
  --bs-btn-border-radius: 0.25rem;
}

.fade {
  transition: opacity .15s linear;
}

@media (prefers-reduced-motion:reduce) {
  .fade {
    transition: none;
  }
}

.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.btn-group {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}

.btn-group>.btn {
  position: relative;
  flex: 1 1 auto;
}

.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover {
  z-index: 1;
}

.btn-group {
  border-radius: .375rem;
}

.btn-group>.btn-group:not(:first-child),.btn-group>:not(.btn-check:first-child)+.btn {
  margin-left: -1px;
}

.btn-group>.btn-group:not(:last-child)>.btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.nav {
  --bs-nav-link-padding-x: 1rem;
  --bs-nav-link-padding-y: 0.5rem;
  --bs-nav-link-font-weight: ;
  --bs-nav-link-color: var(--bs-link-color);
  --bs-nav-link-hover-color: var(--bs-link-hover-color);
  --bs-nav-link-disabled-color: #6c757d;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
  font-size: var(--bs-nav-link-font-size);
  font-weight: var(--bs-nav-link-font-weight);
  color: var(--bs-nav-link-color);
  text-decoration: none;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
}

@media (prefers-reduced-motion:reduce) {
  .nav-link {
    transition: none;
  }
}

.nav-link:focus,.nav-link:hover {
  color: var(--bs-nav-link-hover-color);
}

.nav-pills {
  --bs-nav-pills-border-radius: 0.375rem;
  --bs-nav-pills-link-active-color: #fff;
  --bs-nav-pills-link-active-bg: #0d6efd;
}

.nav-pills .nav-link {
  background: 0 0;
  border: 0;
  border-radius: var(--bs-nav-pills-border-radius);
}

.nav-pills .nav-link:disabled {
  color: var(--bs-nav-link-disabled-color);
  background-color: transparent;
  border-color: transparent;
}

.nav-pills .nav-link.active,.nav-pills .show>.nav-link {
  color: var(--bs-nav-pills-link-active-color);
  background-color: var(--bs-nav-pills-link-active-bg);
}

.tab-content>.tab-pane {
  display: none;
}

.tab-content>.active {
  display: block;
}

.accordion {
  --bs-accordion-color: #212529;
  --bs-accordion-bg: #fff;
  --bs-accordion-transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,border-radius 0.15s ease;
  --bs-accordion-border-color: var(--bs-border-color);
  --bs-accordion-border-width: 1px;
  --bs-accordion-border-radius: 0.375rem;
  --bs-accordion-inner-border-radius: calc(0.375rem - 1px);
  --bs-accordion-btn-padding-x: 1.25rem;
  --bs-accordion-btn-padding-y: 1rem;
  --bs-accordion-btn-color: #212529;
  --bs-accordion-btn-bg: var(--bs-accordion-bg);
  --bs-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  --bs-accordion-btn-icon-width: 1.25rem;
  --bs-accordion-btn-icon-transform: rotate(-180deg);
  --bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;
  --bs-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  --bs-accordion-btn-focus-border-color: #86b7fe;
  --bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  --bs-accordion-body-padding-x: 1.25rem;
  --bs-accordion-body-padding-y: 1rem;
  --bs-accordion-active-color: #0c63e4;
  --bs-accordion-active-bg: #e7f1ff;
}

.accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);
  font-size: 1rem;
  color: var(--bs-accordion-btn-color);
  text-align: left;
  background-color: var(--bs-accordion-btn-bg);
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
  transition: var(--bs-accordion-transition);
}

@media (prefers-reduced-motion:reduce) {
  .accordion-button {
    transition: none;
  }
}

.accordion-button:not(.collapsed) {
  color: var(--bs-accordion-active-color);
  background-color: var(--bs-accordion-active-bg);
  box-shadow: inset 0 calc(-1 * var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color);
}

.accordion-button:not(.collapsed)::after {
  background-image: var(--bs-accordion-btn-active-icon);
  transform: var(--bs-accordion-btn-icon-transform);
}

.accordion-button::after {
  flex-shrink: 0;
  width: var(--bs-accordion-btn-icon-width);
  height: var(--bs-accordion-btn-icon-width);
  margin-left: auto;
  content: "";
  background-image: var(--bs-accordion-btn-icon);
  background-repeat: no-repeat;
  background-size: var(--bs-accordion-btn-icon-width);
  transition: var(--bs-accordion-btn-icon-transition);
}

@media (prefers-reduced-motion:reduce) {
  .accordion-button::after {
    transition: none;
  }
}

.accordion-button:hover {
  z-index: 2;
}

.accordion-button:focus {
  z-index: 3;
  border-color: var(--bs-accordion-btn-focus-border-color);
  outline: 0;
  box-shadow: var(--bs-accordion-btn-focus-box-shadow);
}

.accordion-header {
  margin-bottom: 0;
}

.accordion-item {
  color: var(--bs-accordion-color);
  background-color: var(--bs-accordion-bg);
  border: var(--bs-accordion-border-width) solid var(--bs-accordion-border-color);
}

.accordion-item:first-of-type {
  border-top-left-radius: var(--bs-accordion-border-radius);
  border-top-right-radius: var(--bs-accordion-border-radius);
}

.accordion-item:first-of-type .accordion-button {
  border-top-left-radius: var(--bs-accordion-inner-border-radius);
  border-top-right-radius: var(--bs-accordion-inner-border-radius);
}

.accordion-item:not(:first-of-type) {
  border-top: 0;
}

.accordion-item:last-of-type {
  border-bottom-right-radius: var(--bs-accordion-border-radius);
  border-bottom-left-radius: var(--bs-accordion-border-radius);
}

.accordion-item:last-of-type .accordion-button.collapsed {
  border-bottom-right-radius: var(--bs-accordion-inner-border-radius);
  border-bottom-left-radius: var(--bs-accordion-inner-border-radius);
}

.accordion-item:last-of-type .accordion-collapse {
  border-bottom-right-radius: var(--bs-accordion-border-radius);
  border-bottom-left-radius: var(--bs-accordion-border-radius);
}

.accordion-body {
  padding: var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x);
}

.breadcrumb {
  --bs-breadcrumb-padding-x: 0;
  --bs-breadcrumb-padding-y: 0;
  --bs-breadcrumb-margin-bottom: 1rem;
  --bs-breadcrumb-bg: ;
  --bs-breadcrumb-border-radius: ;
  --bs-breadcrumb-divider-color: #6c757d;
  --bs-breadcrumb-item-padding-x: 0.5rem;
  --bs-breadcrumb-item-active-color: #6c757d;
  display: flex;
  flex-wrap: wrap;
  padding: var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);
  margin-bottom: var(--bs-breadcrumb-margin-bottom);
  font-size: var(--bs-breadcrumb-font-size);
  list-style: none;
  background-color: var(--bs-breadcrumb-bg);
  border-radius: var(--bs-breadcrumb-border-radius);
}

.breadcrumb-item+.breadcrumb-item {
  padding-left: var(--bs-breadcrumb-item-padding-x);
}

.breadcrumb-item+.breadcrumb-item::before {
  float: left;
  padding-right: var(--bs-breadcrumb-item-padding-x);
  color: var(--bs-breadcrumb-divider-color);
  content: var(--bs-breadcrumb-divider, "/");
}

.breadcrumb-item.active {
  color: var(--bs-breadcrumb-item-active-color);
}

.page-link {
  position: relative;
  display: block;
  padding: var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);
  font-size: var(--bs-pagination-font-size);
  color: var(--bs-pagination-color);
  text-decoration: none;
  background-color: var(--bs-pagination-bg);
  border: var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

@media (prefers-reduced-motion:reduce) {
  .page-link {
    transition: none;
  }
}

.page-link:hover {
  z-index: 2;
  color: var(--bs-pagination-hover-color);
  background-color: var(--bs-pagination-hover-bg);
  border-color: var(--bs-pagination-hover-border-color);
}

.page-link:focus {
  z-index: 3;
  color: var(--bs-pagination-focus-color);
  background-color: var(--bs-pagination-focus-bg);
  outline: 0;
  box-shadow: var(--bs-pagination-focus-box-shadow);
}

.active>.page-link,.page-link.active {
  z-index: 3;
  color: var(--bs-pagination-active-color);
  background-color: var(--bs-pagination-active-bg);
  border-color: var(--bs-pagination-active-border-color);
}

.page-item:not(:first-child) .page-link {
  margin-left: -1px;
}

.page-item:first-child .page-link {
  border-top-left-radius: var(--bs-pagination-border-radius);
  border-bottom-left-radius: var(--bs-pagination-border-radius);
}

.page-item:last-child .page-link {
  border-top-right-radius: var(--bs-pagination-border-radius);
  border-bottom-right-radius: var(--bs-pagination-border-radius);
}

@keyframes progress-bar-stripes {
  0% {
    background-position-x: 1rem;
  }
}

.list-group {
  --bs-list-group-color: #212529;
  --bs-list-group-bg: #fff;
  --bs-list-group-border-color: rgba(0, 0, 0, 0.125);
  --bs-list-group-border-width: 1px;
  --bs-list-group-border-radius: 0.375rem;
  --bs-list-group-item-padding-x: 1rem;
  --bs-list-group-item-padding-y: 0.5rem;
  --bs-list-group-action-color: #495057;
  --bs-list-group-action-hover-color: #495057;
  --bs-list-group-action-hover-bg: #f8f9fa;
  --bs-list-group-action-active-color: #212529;
  --bs-list-group-action-active-bg: #e9ecef;
  --bs-list-group-disabled-color: #6c757d;
  --bs-list-group-disabled-bg: #fff;
  --bs-list-group-active-color: #fff;
  --bs-list-group-active-bg: #0d6efd;
  --bs-list-group-active-border-color: #0d6efd;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: var(--bs-list-group-border-radius);
}

.list-group-item-action {
  width: 100%;
  color: var(--bs-list-group-action-color);
  text-align: inherit;
}

.list-group-item-action:focus,.list-group-item-action:hover {
  z-index: 1;
  color: var(--bs-list-group-action-hover-color);
  text-decoration: none;
  background-color: var(--bs-list-group-action-hover-bg);
}

.list-group-item-action:active {
  color: var(--bs-list-group-action-active-color);
  background-color: var(--bs-list-group-action-active-bg);
}

.list-group-item {
  position: relative;
  display: block;
  padding: var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);
  color: var(--bs-list-group-color);
  text-decoration: none;
  background-color: var(--bs-list-group-bg);
  border: var(--bs-list-group-border-width) solid var(--bs-list-group-border-color);
}

.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}

.list-group-item:disabled {
  color: var(--bs-list-group-disabled-color);
  pointer-events: none;
  background-color: var(--bs-list-group-disabled-bg);
}

.list-group-item.active {
  z-index: 2;
  color: var(--bs-list-group-active-color);
  background-color: var(--bs-list-group-active-bg);
  border-color: var(--bs-list-group-active-border-color);
}

.list-group-item+.list-group-item {
  border-top-width: 0;
}

.list-group-item+.list-group-item.active {
  margin-top: calc(-1 * var(--bs-list-group-border-width));
  border-top-width: var(--bs-list-group-border-width);
}

.list-group-item-primary {
  color: #084298;
  background-color: #cfe2ff;
}

.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover {
  color: #084298;
  background-color: #bacbe6;
}

.list-group-item-primary.list-group-item-action.active {
  color: #fff;
  background-color: #084298;
  border-color: #084298;
}

.list-group-item-dark {
  color: #141619;
  background-color: #d3d3d4;
}

.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover {
  color: #141619;
  background-color: #bebebf;
}

.list-group-item-dark.list-group-item-action.active {
  color: #fff;
  background-color: #141619;
  border-color: #141619;
}

@keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}

@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }

  50% {
    opacity: 1;
    transform: none;
  }
}

.placeholder {
  display: inline-block;
  min-height: 1em;
  vertical-align: middle;
  cursor: wait;
  background-color: currentcolor;
  opacity: .5;
}

.placeholder.btn::before {
  display: inline-block;
  content: "";
}

.placeholder-sm {
  min-height: .8em;
}

.placeholder-lg {
  min-height: 1.2em;
}

@keyframes placeholder-glow {
  50% {
    opacity: .2;
  }
}

@keyframes placeholder-wave {
  100% {
    -webkit-mask-position: -200% 0%;
    mask-position: -200% 0%;
  }
}

.link-primary {
  color: #0d6efd!important;
}

.link-primary:focus,.link-primary:hover {
  color: #0a58ca!important;
}

.link-dark {
  color: #212529!important;
}

.link-dark:focus,.link-dark:hover {
  color: #1a1e21!important;
}

.shadow {
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}

.shadow-sm {
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
}

.top-0 {
  top: 0!important;
}

.top-50 {
  top: 50%!important;
}

.top-100 {
  top: 100%!important;
}

.h-25 {
  height: 25%!important;
}

.h-50 {
  height: 50%!important;
}

.h-75 {
  height: 75%!important;
}

.h-100 {
  height: 100%!important;
}

.flex-row {
  flex-direction: row!important;
}

.flex-column {
  flex-direction: column!important;
}

.my-0 {
  margin-top: 0!important;
  margin-bottom: 0!important;
}

.my-1 {
  margin-top: .25rem!important;
  margin-bottom: .25rem!important;
}

.my-2 {
  margin-top: .5rem!important;
  margin-bottom: .5rem!important;
}

.my-3 {
  margin-top: 1rem!important;
  margin-bottom: 1rem!important;
}

.my-4 {
  margin-top: 1.5rem!important;
  margin-bottom: 1.5rem!important;
}

.my-5 {
  margin-top: 3rem!important;
  margin-bottom: 3rem!important;
}

.mt-0 {
  margin-top: 0!important;
}

.mt-1 {
  margin-top: .25rem!important;
}

.mt-2 {
  margin-top: .5rem!important;
}

.mt-3 {
  margin-top: 1rem!important;
}

.mt-4 {
  margin-top: 1.5rem!important;
}

.mt-5 {
  margin-top: 3rem!important;
}

.mb-0 {
  margin-bottom: 0!important;
}

.mb-1 {
  margin-bottom: .25rem!important;
}

.mb-2 {
  margin-bottom: .5rem!important;
}

.mb-3 {
  margin-bottom: 1rem!important;
}

.mb-4 {
  margin-bottom: 1.5rem!important;
}

.mb-5 {
  margin-bottom: 3rem!important;
}

.p-0 {
  padding: 0!important;
}

.p-1 {
  padding: .25rem!important;
}

.p-2 {
  padding: .5rem!important;
}

.p-3 {
  padding: 1rem!important;
}

.p-4 {
  padding: 1.5rem!important;
}

.p-5 {
  padding: 3rem!important;
}

.px-0 {
  padding-right: 0!important;
  padding-left: 0!important;
}

.px-1 {
  padding-right: .25rem!important;
  padding-left: .25rem!important;
}

.px-2 {
  padding-right: .5rem!important;
  padding-left: .5rem!important;
}

.px-3 {
  padding-right: 1rem!important;
  padding-left: 1rem!important;
}

.px-4 {
  padding-right: 1.5rem!important;
  padding-left: 1.5rem!important;
}

.px-5 {
  padding-right: 3rem!important;
  padding-left: 3rem!important;
}

.py-0 {
  padding-top: 0!important;
  padding-bottom: 0!important;
}

.py-1 {
  padding-top: .25rem!important;
  padding-bottom: .25rem!important;
}

.py-2 {
  padding-top: .5rem!important;
  padding-bottom: .5rem!important;
}

.py-3 {
  padding-top: 1rem!important;
  padding-bottom: 1rem!important;
}

.py-4 {
  padding-top: 1.5rem!important;
  padding-bottom: 1.5rem!important;
}

.py-5 {
  padding-top: 3rem!important;
  padding-bottom: 3rem!important;
}

.fs-1 {
  font-size: calc(1.375rem + 1.5vw)!important;
}

.fs-2 {
  font-size: calc(1.325rem + .9vw)!important;
}

.fs-3 {
  font-size: calc(1.3rem + .6vw)!important;
}

.fs-4 {
  font-size: calc(1.275rem + .3vw)!important;
}

.fs-5 {
  font-size: 1.25rem!important;
}

.fs-6 {
  font-size: 1rem!important;
}

.fw-bold {
  font-weight: 700!important;
}

.text-center {
  text-align: center!important;
}

.text-primary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-primary-rgb),var(--bs-text-opacity))!important;
}

.text-dark {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-dark-rgb),var(--bs-text-opacity))!important;
}

.text-body {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-body-color-rgb),var(--bs-text-opacity))!important;
}

.rounded {
  border-radius: var(--bs-border-radius)!important;
}

.rounded-0 {
  border-radius: 0!important;
}

.rounded-1 {
  border-radius: var(--bs-border-radius-sm)!important;
}

.rounded-2 {
  border-radius: var(--bs-border-radius)!important;
}

.rounded-3 {
  border-radius: var(--bs-border-radius-lg)!important;
}

.rounded-4 {
  border-radius: var(--bs-border-radius-xl)!important;
}

.rounded-5 {
  border-radius: var(--bs-border-radius-2xl)!important;
}

.rounded-pill {
  border-radius: var(--bs-border-radius-pill)!important;
}

.rounded-top {
  border-top-left-radius: var(--bs-border-radius)!important;
  border-top-right-radius: var(--bs-border-radius)!important;
}

@media (min-width:576px) {
  .flex-sm-row {
    flex-direction: row!important;
  }

  .flex-sm-column {
    flex-direction: column!important;
  }

  .my-sm-0 {
    margin-top: 0!important;
    margin-bottom: 0!important;
  }

  .my-sm-1 {
    margin-top: .25rem!important;
    margin-bottom: .25rem!important;
  }

  .my-sm-2 {
    margin-top: .5rem!important;
    margin-bottom: .5rem!important;
  }

  .my-sm-3 {
    margin-top: 1rem!important;
    margin-bottom: 1rem!important;
  }

  .my-sm-4 {
    margin-top: 1.5rem!important;
    margin-bottom: 1.5rem!important;
  }

  .my-sm-5 {
    margin-top: 3rem!important;
    margin-bottom: 3rem!important;
  }

  .mt-sm-0 {
    margin-top: 0!important;
  }

  .mt-sm-1 {
    margin-top: .25rem!important;
  }

  .mt-sm-2 {
    margin-top: .5rem!important;
  }

  .mt-sm-3 {
    margin-top: 1rem!important;
  }

  .mt-sm-4 {
    margin-top: 1.5rem!important;
  }

  .mt-sm-5 {
    margin-top: 3rem!important;
  }

  .mb-sm-0 {
    margin-bottom: 0!important;
  }

  .mb-sm-1 {
    margin-bottom: .25rem!important;
  }

  .mb-sm-2 {
    margin-bottom: .5rem!important;
  }

  .mb-sm-3 {
    margin-bottom: 1rem!important;
  }

  .mb-sm-4 {
    margin-bottom: 1.5rem!important;
  }

  .mb-sm-5 {
    margin-bottom: 3rem!important;
  }

  .p-sm-0 {
    padding: 0!important;
  }

  .p-sm-1 {
    padding: .25rem!important;
  }

  .p-sm-2 {
    padding: .5rem!important;
  }

  .p-sm-3 {
    padding: 1rem!important;
  }

  .p-sm-4 {
    padding: 1.5rem!important;
  }

  .p-sm-5 {
    padding: 3rem!important;
  }

  .px-sm-0 {
    padding-right: 0!important;
    padding-left: 0!important;
  }

  .px-sm-1 {
    padding-right: .25rem!important;
    padding-left: .25rem!important;
  }

  .px-sm-2 {
    padding-right: .5rem!important;
    padding-left: .5rem!important;
  }

  .px-sm-3 {
    padding-right: 1rem!important;
    padding-left: 1rem!important;
  }

  .px-sm-4 {
    padding-right: 1.5rem!important;
    padding-left: 1.5rem!important;
  }

  .px-sm-5 {
    padding-right: 3rem!important;
    padding-left: 3rem!important;
  }

  .py-sm-0 {
    padding-top: 0!important;
    padding-bottom: 0!important;
  }

  .py-sm-1 {
    padding-top: .25rem!important;
    padding-bottom: .25rem!important;
  }

  .py-sm-2 {
    padding-top: .5rem!important;
    padding-bottom: .5rem!important;
  }

  .py-sm-3 {
    padding-top: 1rem!important;
    padding-bottom: 1rem!important;
  }

  .py-sm-4 {
    padding-top: 1.5rem!important;
    padding-bottom: 1.5rem!important;
  }

  .py-sm-5 {
    padding-top: 3rem!important;
    padding-bottom: 3rem!important;
  }

  .text-sm-center {
    text-align: center!important;
  }
}

@media (min-width:768px) {
  .flex-md-row {
    flex-direction: row!important;
  }

  .flex-md-column {
    flex-direction: column!important;
  }

  .my-md-0 {
    margin-top: 0!important;
    margin-bottom: 0!important;
  }

  .my-md-1 {
    margin-top: .25rem!important;
    margin-bottom: .25rem!important;
  }

  .my-md-2 {
    margin-top: .5rem!important;
    margin-bottom: .5rem!important;
  }

  .my-md-3 {
    margin-top: 1rem!important;
    margin-bottom: 1rem!important;
  }

  .my-md-4 {
    margin-top: 1.5rem!important;
    margin-bottom: 1.5rem!important;
  }

  .my-md-5 {
    margin-top: 3rem!important;
    margin-bottom: 3rem!important;
  }

  .mt-md-0 {
    margin-top: 0!important;
  }

  .mt-md-1 {
    margin-top: .25rem!important;
  }

  .mt-md-2 {
    margin-top: .5rem!important;
  }

  .mt-md-3 {
    margin-top: 1rem!important;
  }

  .mt-md-4 {
    margin-top: 1.5rem!important;
  }

  .mt-md-5 {
    margin-top: 3rem!important;
  }

  .mb-md-0 {
    margin-bottom: 0!important;
  }

  .mb-md-1 {
    margin-bottom: .25rem!important;
  }

  .mb-md-2 {
    margin-bottom: .5rem!important;
  }

  .mb-md-3 {
    margin-bottom: 1rem!important;
  }

  .mb-md-4 {
    margin-bottom: 1.5rem!important;
  }

  .mb-md-5 {
    margin-bottom: 3rem!important;
  }

  .p-md-0 {
    padding: 0!important;
  }

  .p-md-1 {
    padding: .25rem!important;
  }

  .p-md-2 {
    padding: .5rem!important;
  }

  .p-md-3 {
    padding: 1rem!important;
  }

  .p-md-4 {
    padding: 1.5rem!important;
  }

  .p-md-5 {
    padding: 3rem!important;
  }

  .px-md-0 {
    padding-right: 0!important;
    padding-left: 0!important;
  }

  .px-md-1 {
    padding-right: .25rem!important;
    padding-left: .25rem!important;
  }

  .px-md-2 {
    padding-right: .5rem!important;
    padding-left: .5rem!important;
  }

  .px-md-3 {
    padding-right: 1rem!important;
    padding-left: 1rem!important;
  }

  .px-md-4 {
    padding-right: 1.5rem!important;
    padding-left: 1.5rem!important;
  }

  .px-md-5 {
    padding-right: 3rem!important;
    padding-left: 3rem!important;
  }

  .py-md-0 {
    padding-top: 0!important;
    padding-bottom: 0!important;
  }

  .py-md-1 {
    padding-top: .25rem!important;
    padding-bottom: .25rem!important;
  }

  .py-md-2 {
    padding-top: .5rem!important;
    padding-bottom: .5rem!important;
  }

  .py-md-3 {
    padding-top: 1rem!important;
    padding-bottom: 1rem!important;
  }

  .py-md-4 {
    padding-top: 1.5rem!important;
    padding-bottom: 1.5rem!important;
  }

  .py-md-5 {
    padding-top: 3rem!important;
    padding-bottom: 3rem!important;
  }

  .text-md-center {
    text-align: center!important;
  }
}

@media (min-width:992px) {
  .flex-lg-row {
    flex-direction: row!important;
  }

  .flex-lg-column {
    flex-direction: column!important;
  }

  .my-lg-0 {
    margin-top: 0!important;
    margin-bottom: 0!important;
  }

  .my-lg-1 {
    margin-top: .25rem!important;
    margin-bottom: .25rem!important;
  }

  .my-lg-2 {
    margin-top: .5rem!important;
    margin-bottom: .5rem!important;
  }

  .my-lg-3 {
    margin-top: 1rem!important;
    margin-bottom: 1rem!important;
  }

  .my-lg-4 {
    margin-top: 1.5rem!important;
    margin-bottom: 1.5rem!important;
  }

  .my-lg-5 {
    margin-top: 3rem!important;
    margin-bottom: 3rem!important;
  }

  .mt-lg-0 {
    margin-top: 0!important;
  }

  .mt-lg-1 {
    margin-top: .25rem!important;
  }

  .mt-lg-2 {
    margin-top: .5rem!important;
  }

  .mt-lg-3 {
    margin-top: 1rem!important;
  }

  .mt-lg-4 {
    margin-top: 1.5rem!important;
  }

  .mt-lg-5 {
    margin-top: 3rem!important;
  }

  .mb-lg-0 {
    margin-bottom: 0!important;
  }

  .mb-lg-1 {
    margin-bottom: .25rem!important;
  }

  .mb-lg-2 {
    margin-bottom: .5rem!important;
  }

  .mb-lg-3 {
    margin-bottom: 1rem!important;
  }

  .mb-lg-4 {
    margin-bottom: 1.5rem!important;
  }

  .mb-lg-5 {
    margin-bottom: 3rem!important;
  }

  .p-lg-0 {
    padding: 0!important;
  }

  .p-lg-1 {
    padding: .25rem!important;
  }

  .p-lg-2 {
    padding: .5rem!important;
  }

  .p-lg-3 {
    padding: 1rem!important;
  }

  .p-lg-4 {
    padding: 1.5rem!important;
  }

  .p-lg-5 {
    padding: 3rem!important;
  }

  .px-lg-0 {
    padding-right: 0!important;
    padding-left: 0!important;
  }

  .px-lg-1 {
    padding-right: .25rem!important;
    padding-left: .25rem!important;
  }

  .px-lg-2 {
    padding-right: .5rem!important;
    padding-left: .5rem!important;
  }

  .px-lg-3 {
    padding-right: 1rem!important;
    padding-left: 1rem!important;
  }

  .px-lg-4 {
    padding-right: 1.5rem!important;
    padding-left: 1.5rem!important;
  }

  .px-lg-5 {
    padding-right: 3rem!important;
    padding-left: 3rem!important;
  }

  .py-lg-0 {
    padding-top: 0!important;
    padding-bottom: 0!important;
  }

  .py-lg-1 {
    padding-top: .25rem!important;
    padding-bottom: .25rem!important;
  }

  .py-lg-2 {
    padding-top: .5rem!important;
    padding-bottom: .5rem!important;
  }

  .py-lg-3 {
    padding-top: 1rem!important;
    padding-bottom: 1rem!important;
  }

  .py-lg-4 {
    padding-top: 1.5rem!important;
    padding-bottom: 1.5rem!important;
  }

  .py-lg-5 {
    padding-top: 3rem!important;
    padding-bottom: 3rem!important;
  }

  .text-lg-center {
    text-align: center!important;
  }
}

@media (min-width:1200px) {
  .fs-1 {
    font-size: 2.5rem!important;
  }

  .fs-2 {
    font-size: 2rem!important;
  }

  .fs-3 {
    font-size: 1.75rem!important;
  }

  .fs-4 {
    font-size: 1.5rem!important;
  }
}

/*# sourceMappingURL=bootstrap.min.css.map */