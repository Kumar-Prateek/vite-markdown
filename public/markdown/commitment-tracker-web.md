# Employee Commitment Report (Manager Portal)

### **Summary**
A new component needs to be developed in the Manager Portal to view the commitments made by employees under their manager. The report will be nested, initially displaying the data for employees directly under the manager. Upon clicking on an employee, their direct reports (if any) will be displayed, continuing recursively until the root-level employee is reached. This drill-down report will be dynamic and fetched from an API, with optional date and name filters.

### **Features**
- **Initial Manager View**: Displays a list of employees directly reporting to the manager.
- **Employee Drill-Down**: Clicking on an employee expands their direct reports, displaying their commitments. This behavior will continue until the root-level employee.
- **Filters**:
  - **Date Filter**: An optional filter for selecting a specific date range for the commitments.
  - **Name Filter**: A non-mandatory filter for searching specific employees by name.
- **Dynamic Data Fetching**: Data will be fetched dynamically from the API based on the filters and the employee selected.
- **Loading States**: Show loading indicators while fetching data.
- **Collapsible View**: The employee list will be displayed in a collapsible/expandable format for better navigation.

### **API Integration**
- The component will make API requests to fetch the commitment data based on the selected filters.
  - Example API endpoint: `GET /api/commitments?managerId=<managerId>&startDate=<startDate>&endDate=<endDate>&employeeName=<employeeName>`
- The API response will contain a nested structure, where each employee has their commitments and direct reports.

### **State Management**
- **Selected Employee**: Track the currently selected employee whose report is being viewed.
- **Filters**: Maintain the state of applied filters (date and name).
- **Data Caching**: Cache the fetched report data for each employee to avoid unnecessary API calls when drilling down.

### **UI/UX**
- The component will use an **accordion-like or tree structure** to present employee reports in a nested, collapsible format.
- Provide a **loading spinner or indicator** when fetching data.
- Ensure smooth transitions between levels when drilling down.
- Display a message if no data is available for an employee or if the API call fails.

### **Performance Considerations**
- **Lazy Loading**: Use lazy loading for report data to prevent excessive API calls and optimize performance.
- **Pagination/Infinite Scroll**: Implement pagination or infinite scrolling for large sets of employee data.

### **Error Handling**
- Gracefully handle cases where there are no reports or data available for an employee.
- Provide user-friendly error messages in case of API failures.

### **Acceptance Criteria**
1. The component loads and displays a list of employees directly under the manager.
2. Clicking on an employee reveals their direct reports and commitments.
3. The system fetches and displays employee commitment data based on the selected date and name filters.
4. The report data is displayed in a nested format, and the employee drill-down continues to the root level.
5. The component provides loading indicators while fetching data.
6. The component handles errors and displays appropriate messages if data is unavailable or if an API call fails.

### **Priority**: High
