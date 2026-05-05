// ========== CONFIGURATION ==========
var NOTIFICATION_EMAIL = 'dishedend@satyafab.com'; // Change this to the recipient email
var EMAIL_SUBJECT_PREFIX = '[Enquiry]'; // Prefix for email subject line
// ====================================

function doPost(e) {
  try {
    var raw = e.postData.contents;
    var data = JSON.parse(raw);
    
    // Get the active spreadsheet (the one this script is attached to)
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Append row to sheet
    sheet.appendRow([
      new Date(),           // Timestamp
      data.firstName,       // First Name
      data.lastName,        // Last Name
      data.email,           // Email
      data.phone || '',     // Phone
      data.company || '',   // Company
      data.city || '',      // City
      data.country || '',   // Country
      data.subject,         // Subject
      data.message          // Message
    ]);
    
    // Send email notification
    var subjectMap = {
      'quote': 'Quote Request',
      'inquiry': 'General Inquiry',
      'technical': 'Technical Question',
      'visit': 'Factory Visit Request',
      'other': 'Other'
    };
    
    var subjectText = subjectMap[data.subject] || data.subject;
    var emailSubject = EMAIL_SUBJECT_PREFIX + ' New ' + subjectText + ' from ' + data.firstName + ' ' + data.lastName;
    
    var emailBody = 'New contact form submission received:\n\n' +
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
      'Name: ' + data.firstName + ' ' + data.lastName + '\n' +
      'Email: ' + data.email + '\n' +
      'Phone: ' + (data.phone || 'Not provided') + '\n' +
      'Company: ' + (data.company || 'Not provided') + '\n' +
      'City: ' + (data.city || 'Not provided') + '\n' +
      'Country: ' + (data.country || 'Not provided') + '\n' +
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
      'Subject: ' + subjectText + '\n\n' +
      'Message:\n' + data.message + '\n\n' +
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n' +
      'Submitted: ' + new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'}) + ' IST\n';
    
    MailApp.sendEmail(NOTIFICATION_EMAIL, emailSubject, emailBody);
    
    // Return success
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Form submitted successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'Satya Fabricators Contact Form API is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
