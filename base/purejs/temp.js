function statusToPublish (newChannel, oldChannel) {
  const status = 1
  const oldStatus = 0
  if ((
        status === 1 ||
        status === 2 ||
        status === 6
      ) &&
      (
        oldStatus !== 1 &&
        oldStatus !== 2 &&
        oldStatus !== 6
      )
  ) {
    console.log('sss-true:', status)
    return true
  } else {
    console.log('sss-false:', status)
    return false
  }
}
statusToPublish()