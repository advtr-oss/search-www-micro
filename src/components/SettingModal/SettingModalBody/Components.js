import styled from 'styled-components'

const Title = styled.label`
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;

  text-transform: uppercase;
  font-weight: 600;

  margin-left: 16px;
  margin-bottom: 10px;
  margin-top: 10px;
`

const SettingGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 50px;
`

const SettingGroupName = styled.div`
  padding-left: 16px;
  font-size: 16px;
  white-space: nowrap;
  width: 30%;
  font-weight: 500;

  line-height: 50px;
`

const SettingGroupContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
`

export { Title, SettingGroup, SettingGroupName, SettingGroupContent }
