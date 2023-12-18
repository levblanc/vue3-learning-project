import swal from 'sweetalert'
export function useFlash() {
  const flash = (message) => {
    swal('Success', message, 'success')
  }

  return {
    flash
  }
}
