import styled from 'styled-components';

export const SendStickerWrapper = styled.div`
  position: relative;
`;

export const ButtonSticker = styled.button<{ isOpen: boolean }>`
  border-radius: 50%;
  padding: 0 3px 0 0;
  min-width: 50px;
  min-height: 50px;
  font-size: 20px;
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.colors.neutrals[300]};
  filter: ${(p) => (p.isOpen ? 'grayscale(0)' : 'grayscale(1)')};
  hover: {
    filter: grayscale(0);
  }
`;

export const StickerModal = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  position: absolute;
  background-color: ${(p) => p.theme.colors.neutrals[800]};
  width: 290px;
  height: 300px;
  right: 30px;
  bottom: 30px;
  padding: 16px;
  box-shadow: rgba(4, 4, 5, 0.15) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.24) 0px 8px 16px 0px;

  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;

export const StickersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 1;
  padding-top: 16px;
  overflow: scroll;
`;

export const StickerItem = styled.li`
  width: 50%;
  border-radius: 5px;
  padding: 10px;
  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.neutrals[600]};
  }
`;

export const StickerImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;
