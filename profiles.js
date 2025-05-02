const profiles = [
    {
      name: "Ayşe",
      age: 24,
      height: 165,
      weight: 55,
      gender: "Kadın",
      email: "ayse@example.com",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Mehmet",
      age: 28,
      height: 180,
      weight: 75,
      gender: "Erkek",
      email: "mehmet@example.com",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Zeynep",
      age: 21,
      height: 160,
      weight: 50,
      gender: "Kadın",
      email: "zeynep@example.com",
      image: "https://randomuser.me/api/portraits/women/12.jpg"
    }
  ];
  
  let current = 0;
  
  function showProfile() {
    const profile = profiles[current];
    document.getElementById("profile-pic").src = profile.image;
    document.getElementById("profile-info").innerHTML = `
      <h3>${profile.name}</h3>
      <p>Yaş: ${profile.age}</p>
      <p>Boy: ${profile.height} cm</p>
      <p>Kilo: ${profile.weight} kg</p>
      <p>Cinsiyet: ${profile.gender}</p>
    `;
    document.getElementById("contact-info").innerHTML = "";
  }
  
  function accept() {
    const email = profiles[current].email;
    document.getElementById("contact-info").innerHTML = `İletişim: ${email}`;
  }
  
  function reject() {
    current++;
    if (current >= profiles.length) {
      document.querySelector(".profile-container").innerHTML = "<h2>Yeni profil kalmadı 😅</h2>";
    } else {
      showProfile();
    }
  }
  
  window.onload = showProfile;
  