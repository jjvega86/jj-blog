export function generateCurrentYear() {
  return new Date().getFullYear().toString();
}

export function getRandomHobby(identity) {
  return identity.hobbies[Math.floor(Math.random() * identity.hobbies.length)];
}
