document.getElementById("challengeBtn").addEventListener("click", function() {
    window.location.href = "extract.html";
  });
  
  document.getElementById("extractBtn").addEventListener("click", function() {
    const jdInput = document.getElementById("jdInput").value;
    const extractedSkills = extractSkills(jdInput);
  
    displaySkills(extractedSkills);
  });
  
  function extractSkills(jdContent) {
    // 在这里编写实际的信息抽取逻辑，提取技能
    // 这部分可能涉及到文本处理、关键词提取等技术
  
    // 示例：假设技能是用逗号分隔的
    return jdContent.split(",");
  }
  
  function displaySkills(skills) {
    const outputDiv = document.getElementById("output");
    const skillsList = skills.map(skill => `<div>${skill}</div>`).join("");
    outputDiv.innerHTML = skillsList;
  
    // 在日志中记录操作
    const logDiv = document.getElementById("log");
    const logMessage = `技能提取完成：${skills.length} 项技能提取成功。`;
    logDiv.innerHTML = logMessage;
  }
  