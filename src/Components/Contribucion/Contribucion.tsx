import React, { useRef, useState } from 'react';
import { ContribucionWrapper, DestinoWrapper, DireccionDestino, InputWrapper, Tooltip } from './Contribucion.styled';
import { Metamask } from './Metamask/Metamask';
import Logo from '../../../public/metamask.png';
import NextImage from 'next/image';
import { useCheckMetamaskInstalled } from '../../Hooks/useEthereum';
import Image from 'next/image';
import CopyIcon from '../../../public/copy.png';

export const Contribucion: React.FC<{}> = () => {
  const isMetamaskInstalled = useCheckMetamaskInstalled();
  const destinationRef = useRef<HTMLInputElement>(null);
  const [mostrarTooltip, setMostrarTooltip] = useState(false);

  const copiar = () => {
    navigator.clipboard.writeText(destinationRef.current?.value ?? '');
    setMostrarTooltip(true);

    setTimeout(() => {
      setMostrarTooltip(false);
    }, 1500);
  };

  return (
    <ContribucionWrapper>
      <p>
        Esto me ha llevado un tiempo desarrollarlo, así que si alguno cree que le es útil puede contribuir con cualquier aporte (☕,🍕) y
        así me motivo para añadirle más funciones.
      </p>
      {isMetamaskInstalled ? (
        <Metamask destinoRef={destinationRef} />
      ) : (
        <p>
          Instala{' '}
          <a href="https://metamask.io/" target="_blank" rel="noreferrer">
            <NextImage src={Logo} /> Metamask
          </a>
          {' '}para contribuir
        </p>
      )}
      <br />
      <DestinoWrapper>
        <p>O envía cualquier token a esta dirección </p>
        <InputWrapper>
          <DireccionDestino type="text" value="0x57d3564Fe77ae5f4787f5AdF70Df081c836f210C" disabled ref={destinationRef} />
          <Image src={CopyIcon} width={24} height={28} alt="copiar" onClick={copiar} title="Copiar" />
          {mostrarTooltip && <Tooltip>Copiado al portapapeles!</Tooltip>}
        </InputWrapper>
      </DestinoWrapper>
    </ContribucionWrapper>
  );
};