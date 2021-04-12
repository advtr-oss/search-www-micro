import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'

const SettingModalFooter = ({ version }) => {
  const build = version
    ? {
        href: `https://github.com/advtr-oss/search-www-micro/releases/tag/v${version}`,
        key: 'github',
        title: `v${version}`
      }
    : {
        href: 'https://github.com/advtr-oss/search-www-micro',
        key: 'github',
        title: 'main'
      }

  return (
    <Wrapper className='setting-modal_footer'>
      <div className='poweredBy'>
        <a key='website' href='https://advtr.co.uk' target='_blank' rel='noopener noreferrer'>Advtr</a>
      &nbsp;
        <a
          {...build}
          target='_blank'
          rel='noopener noreferrer'
        >
          {build.title}
        </a>
      &nbsp;
        <a href='https://advtr.co.uk/acknowledgments' target='_blank' rel='noopener noreferrer'>
          - Acknowledgments
        </a>
      </div>
    </Wrapper>
  )
}

SettingModalFooter.propTypes = {
  version: PropTypes.string
}

export default SettingModalFooter
