import { MetaMask } from "@web3-react/metamask";
import type { Connector } from "@web3-react/types";

// function that returns a string with the time in the format "DD:HH:MM:SS" that left until the given date
function parseTime(date: Date) {
  const now = new Date();
  const diff = date.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  const minutes = Math.floor((diff / 1000 / 60) % 60);

  const seconds = Math.floor((diff / 1000) % 60);

  // Add a leading zero if the value is less than 10
  let daysString = days.toString();
  let hoursString = hours.toString();
  let minutesString = minutes.toString();
  let secondsString = seconds.toString();

  if (Number(days) < 10) {
    daysString = `0${days}`;
  }

  if (Number(hours) < 10) {
    hoursString = `0${hours}`;
  }

  if (Number(minutes) < 10) {
    minutesString = `0${minutes}`;
  }

  if (Number(seconds) < 10) {
    secondsString = `0${seconds}`;
  }

  return `${daysString}:${hoursString}:${minutesString}:${secondsString}`;
}

function getName(connector: Connector) {
  if (connector instanceof MetaMask) return "MetaMask";
  return "Unknown";
}

// function to delete 'execution reverted' from the error message
function parseErrorMessage(error: string) {
  if (error.includes("execution reverted")) {
    return error.split("execution reverted:")[1];
  }
  if (error.includes("insufficient funds for intrinsic transaction cost")) {
    return "You don't have enough ETH";
  }
  return error;
}

export { parseTime, getName, parseErrorMessage };
