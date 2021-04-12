/*
 * Acknowledgment Messages
 *
 * This contains all the text for the NotFoundPage container.
 */
import { defineMessages } from 'react-intl'

export const scope = 'app.containers.Acknowledgment'

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Acknowledgments'
  },
  lastUpdated: {
    id: `${scope}.lastUpdated`,
    defaultMessage: 'Last Updated'
  }
})
