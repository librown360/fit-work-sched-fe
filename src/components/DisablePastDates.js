

// reusable component to disable past dates
function DisablePastDates() {
    let today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    today = `${year}-${month}-${day}`
    return today
}

export default DisablePastDates