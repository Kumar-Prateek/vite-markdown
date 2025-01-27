# Commitment Tracker EPA App

Develop the Commitment Tracker module with two tabs: **My Commitments** and **Commitment History**, to allow users to manage and track their daily commitments across various predefined metrics.

## Description

The module will consist of:

## Tabs

### My Commitments

Dynamically render a list of metrics in individual cards based on the response from the backend API.

Each card will include the following:

- Pre-defined metric fields (e.g., MTD count, daily run rate, overdue amount) fetched dynamically.
- An input field for "Today's Commitment" or other relevant editable fields as specified for the metric.
- Achievement or summary data related to the metric fetched from the backend.

Users can:

- Input commitments for one or more metrics.
- Submit their inputs via a Submit button, sending the data to the API.

### Commitment History

Dynamically render historical data for metrics based on the selected date.
The displayed information will include:

- Previously submitted commitment values.
- Related metrics (e.g., achievement data) fetched dynamically from the backend.

## Key Features

### Dynamic Field Rendering

- Fetch all fields (both static and editable) for each metric dynamically from the backend.
- UI should adapt to render the fetched data, ensuring flexibility for any new metrics or fields added later.

### User Actions

1. **Input Today's Commitment:**  
   Allow users to input numeric or required values for the dynamically rendered editable fields.
2. **Submit:**  
   Allow users to submit data for one or multiple metrics via a single action.
3. **View History:**  
   Allow users to select a date and view historical data for all metrics.

### API Integration

- **GET API (For My Commitments):**  
  Fetch the list of metrics along with their respective fields (e.g., labels, editable fields, and achievement data) to render on the My Commitments tab.
- **POST API:**  
  Submit user inputs for the dynamically fetched metrics to the backend.
- **GET API (For Commitment History):**  
  Fetch historical data for metrics, including previously submitted commitment values and related achievements, based on the selected date.

## Acceptance Criteria

### My Commitments Tab

- Metrics and fields are dynamically fetched and displayed as individual cards.
- Input fields allow users to provide values for editable fields.
- Submitting data triggers a POST API call with all user-provided inputs.

### Commitment History Tab

- Historical data for metrics is dynamically rendered based on the selected date.
- Accurate fetching and display of previously submitted commitments and related metrics.

### UI/UX

- Responsive and user-friendly design adapts to dynamic content.
- UI aligns with the provided design references for structure and styling.

### Technical Notes

- Implement a generic card component for rendering metrics dynamically:
  - Render fields (e.g., labels, editable inputs, and achievements) based on API response.
  - Include validation logic for editable fields (e.g., numeric-only inputs, required fields).
  - Use a reusable date filter component for the Commitment History tab.
