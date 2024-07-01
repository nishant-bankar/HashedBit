// Change text color on button click
document.getElementById('colorchange').addEventListener('click', function() {
    var color = document.getElementById('colorbox').value;
    document.getElementById('text-container').style.color = color;
  });
  
  // Change text size with range input
  document.getElementById('fontsize').addEventListener('input', function() {
    var size = this.value + 'px';
    document.getElementById('text-container').style.fontSize = size;
  });
  
  // Toggle italic style
  document.getElementById('italic').addEventListener('click', function() {
    var textStyle = document.getElementById('text-container').style.fontStyle;
    if (textStyle === 'italic') {
      document.getElementById('text-container').style.fontStyle = 'normal';
    } else {
      document.getElementById('text-container').style.fontStyle = 'italic';
    }
  });
  
  // Toggle underline style
  document.getElementById('underline').addEventListener('click', function() {
    var textStyle = document.getElementById('text-container').style.textDecoration;
    if (textStyle === 'underline') {
      document.getElementById('text-container').style.textDecoration = 'none';
    } else {
      document.getElementById('text-container').style.textDecoration = 'underline';
    }
  });
  
  // Toggle bold style
  document.getElementById('bold').addEventListener('click', function() {
    var textStyle = document.getElementById('text-container').style.fontWeight;
    if (textStyle === 'bold') {
      document.getElementById('text-container').style.fontWeight = 'normal';
    } else {
      document.getElementById('text-container').style.fontWeight = 'bold';
    }
  });
  
  // Change font family
  document.getElementById('list').addEventListener('change', function() {
    var fontFamily = this.value;
    document.getElementById('text-container').style.fontFamily = fontFamily;
  });
  
  // Get CSS properties
  document.getElementById('getstyle').addEventListener('click', function() {
    var textContainer = document.getElementById('text-container');
    var cssProps = '';
    cssProps += 'color: ' + window.getComputedStyle(textContainer).color + '; ';
    cssProps += 'font-size: ' + window.getComputedStyle(textContainer).fontSize + '; ';
    cssProps += 'font-style: ' + window.getComputedStyle(textContainer).fontStyle + '; ';
    cssProps += 'font-weight: ' + window.getComputedStyle(textContainer).fontWeight + '; ';
    cssProps += 'font-family: ' + window.getComputedStyle(textContainer).fontFamily + '; ';
    document.getElementById('css-props').textContent = cssProps;
  });
  