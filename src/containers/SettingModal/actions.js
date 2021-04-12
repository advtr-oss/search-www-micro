/*
 *
 * LanguageProvider actions
 *
 */

import { OPEN_MODAL, CLOSE_MODAL } from './constants'

export function openModal () {
  return {
    type: OPEN_MODAL,
    isOpen: true
  }
}

export function closeModal () {
  return {
    type: CLOSE_MODAL,
    isOpen: false
  }
}
