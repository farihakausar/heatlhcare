import React from 'react'
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import RemoveIcon from '@mui/icons-material/Remove';
import AttachmentIcon from '@mui/icons-material/Attachment';
import TextField from '@mui/material/TextField';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
export default function Chat() {
  return (
   
    <>
    <Box sx={{margin:{lg:3,xs:1}}}>
  <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",border:"1px solid  #816179",padding:2,borderRadius:2}}>
    <Box sx={{display:"flex",flexDirection:"row"}}>
    <Avatar
        alt="Remy Sharp"
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFhUYFhgYGBgVGBwcGBgYGBgYGhkaGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCc0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQxNDQ0P//AABEIARMAtwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABDEAACAQIDBQUEBwYFBAMBAAABAgADEQQSIQUxQVFxBiJhgZETMqGxB0JSYnLB0RQjguHw8RYzU5KyJDRDwiVkohX/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EACIRAAICAgMAAgMBAAAAAAAAAAABAhEhMQMSQSJhMlFxE//aAAwDAQACEQMRAD8A8yxtgSPWCrPWF7C4W1yHcniXP5SGt2Oww3If9xguVJDcWeWrCFabrEdkqHBSPMwCp2WQbmYQfLFiUWZmvRzgMDYiHYDFVVGXNfleHPsF191sw+MMXA4ZBdmdSBci/H0kuSaoqmsme2jinZ1DHdrLNMXVIFm0MrnqUM19T3t55TQbMxGD72Zmte4iksJUCf2AVKrDeIDX73Ca1sds/mx8zGpitnNfuNoOZiSaBuzCvhONzDsNh2ROu6aKtiMALWRjc8zp8YNjqdyopC4bd4CU5SeBJI2P0YVSWYEW7vlvmO7eKRi38QP0hmzduvgycihiRYyg2liKmIqNUf3m5bh4CMEitznnFmMnGEJ4Tv7EeUfaIZBKe8yQpfjJxgG5R/7C/KDkgoBq0jaDDRhLmpgjlFjrxEFbZxMqM16JohZ9DB8LSLOAOJho2aec0OyNjqKL1cwzLuUjRgOR5x9klgHbKmrXKErutFA9oVQ5uqlfO8UFEVmhwXaDE09zlhybX+cs07aVPrUwfO0zP/8ASQfUM4+PS/ukzLr9F2zS1+2lhc0SehlfV7aA/wDhPrKLGYwMLItj4wU1HHEGNca9QuzLur2sJ3Ux6yo2ltI1dbZZ3B4R8QSiJdxy5eMtv8E4w6lFH8R/SWlCLE3JmaEOw7AW06yzfshiV3hfU/pGPsSsm9N3IwlOL9EosJpKhBJyDwMcjoONP0lRj8M6gNlI4GV+duUIxtWDdGrGJQf6Z8oVS2xZSvcF9ARvExYqPyhCU6p1CH0Pxg4AmaTC06Ra9SofKW6fsIHvMfMzBGs6nUWj/wBqflJcB2b9qGGADAkxtsNzMyWA7QNTGUpmk9TtIp/8Q/rzh0f6FZpgMNwYztsP9ozGvtonclpEdrNyj6fQuzNucPhz9YyWhs7DEjvEzBHa78o+ntqoDcR9A7M9BOy8OD0mvwOxKZoqFAGmtp45g9qVqhOugFzNn2W7UVUKo/eBNlP6yHEaYu1nYtcpqJZWBF+ANzbWKa7tMc9E345T8RFLUXRLZ5+vY/D8ah9Zz/B2H/1D6wn2hiWoZz92b9Qb/B2H/wBQ+s5/g3D/AGz6w5XMYzmH+jDqc2f2fSg+enWZW9b9ZpKWOYCzOrTOK5nVLc4nK9h1NE+IRt5EHfCo29pUkHnJaN+cVodMnr7DouCC5sZR7V2Lg8OhdyzcFUE3Y8AJdnrMFtjFNiK9hqASidAdW8zLhkTQRs/AB8z5MirqFBzsTwFz89I1trPnyZQgH3Q3qGmp7J9nWYGxJvoW3Afh5ybbfYCoSXpsCd9iOW60fdFdGZ9O9pUoq6n6yLYjxZOPlO4/YlNkR6It3gGsSQRuJsdxHKS0EdNMxRgcjq1yqvwNj9VvDjD8G5LMbZXHvqNzgcV+8PiOfB3i0Nx8Zjdt7Iei+W1wRcHnABSb7Jno217VFQ8QbfCUVGhd3lR5HWTKUaZlvZt9k+k5lb7JmvahIKlGV3J6mWIP2TGG/IzQVacGdI1P6F1BcJiilNwN7aeU0Oyns9LqJQOku8Np7I9Irtg1SPUttNfD3/D8xFAdqYsfswAP2fmIpa0ZvZllvHBZ0CPtOE7CJDrHG06Fj8sAOBRHIseZ0CAHSBbfEj853LpOeyjAg2nistJ2G8KbdTumX7N0A1Yqd+iL4a94/MTQ7YUZAp+s6jrqCfgDM3sNmXEO2oC5iSFzEXJ1A4mUvxYR/JHtexKARABpaXOhE8v2VtXEE5keuVUAkVEpkMp0Gq2Im7XElsP7QZhmXS3vDpEsYZq1eUzIdvcAqVEq27jjJUtxHBuo7xlCWZMr/WVijfiXf5FdfST7crBjkanWY95c7u72zIbaZra5uXCBPVuit9tFY/jp6N6qfhGnWBSV5LFEBvbd/VvgfhBMJR7z9ZNsipmy+Kkea6H5wvDUAGf8W7l/KEfTOa0wJ6MEq0ZfvQEBxNJRLMzPV0gNRZc4lRKussYivqCWVF86IBvvaAVxpLrs9gA4BJIsRaUmTLRc4vGFaNjpaw+MUtO2+y6dLDU3UHM1rm513RTSzGilw9zvhKwYJyMKpUm52nEdo9bXtaOqAW3Tgw5vvj2oNbfGBH1jwketBuceKbjlGIaic5KlMWnWosRc6R9FdLXjEUPaVsppfjB+Bg/ZHKMZUVrWOX0JNpzteSGT8X5Sp2XiMmKVhpnUeo4el42vi/4XB01/T2LH4WnSpFlFr6AXNrnkCZb4Giq0ERtQF15eMxO18ePYoKgco1rFNTfcBv0l1sbH0coBFbQWGdHO8WKta95lGX6R0PjdWF7R2ZTKNYC1iR/KeTYlsj5OAew/DUB/MCew1lshy+7Y2v8AznkO3kHtWt9V0B66n84r+QNfEL2Q+VEP33X1AJ/43lz7FbM9iTxEp8GB7G3EOGHUgmWinuXB0YH1lp07MpK1RVU9r0WcoQVI33MgxOOQvkVraX1Okx+1b+0fXXMb9dbwIseZ9Z1rjtXZyOVYNRUxYLEZhpAX2ipNrSjJPOclLhRPYt1xIe4Amw7LjuDqJgsAd833ZRe4v4pEo1Kh3aNJ9JtS2Hoj+uEUG+ld7LRX7v6RQFQKmXhHqSDv0kSUbRzJach0k1Nu9J210gQGt44uRKoAwGSs1tYBnJjlqHjAQX7QnhOg2tprGUakjr1sutjGkJmR7YYnNVVbe4tz1b+wmfxZK2INitiDy8fUSw7Q1Q1R2uAwyi1/eFr3A8Lykr1C1hxtYzeMdEuWD0PshtlMSop1tLd08r77iel7NwVKmLq3DiRPHuyezCU5Fu9+n5Tc4WgwSzEk7tSZyTcYyfU64OTirY/tl2oFNGSl32Ol/qg+J4+UwOyqTOFLm7VKhZieQGpl32qo2UKBqxCjqdJUY85AlNDYqLA+X8o45QpYYZVITOBuFRfQKQIth43MTSOtjdeZHEekESoHBWofZ5iDnNmXumw3G/DiBvgGz6TCuERsxVrXXjbQ29JdKiLyVPaCkUrup+1f1AlYZpu22GKVyT9ZVa/PS2o4HT1EzRnZxu4o45qpMjMURimpIVs9bkz0TspT7qeL/nPO8BvM9J7ID/LH3x85zz/IpaCvpbNnpD7v5zkg+lt710HJB8zFJGSjEAxtWoDB0Q/GOVDOejeyZagjnZbCRIpnQsKCx5YR15GqXj6Q1tHQrKLbm2HpdxDZjx5DnMtiMdVe+d3bqxPwhO36t8TUF7hWCDyAB+N5XuL6es6oxSRi3Y1qemm/fLPs1s722Ippa4zqz8RkUgsD13fxCBOeE9A+j7ZeVHrke8QidAQWI8yB/DK2K6NHgNklHBK5FW9/vX5eEPIu9lBPQXJ6CailhxlUEAixuCLi/wDRgz/uwbAAeAA+U5nwqzoXM60ec9qKbIVdxlswNjv5DpvmLxeKLOV43Fvlvm3+kd7LTP2yL+RvPPmcjvkXKsCPEX3elouii6K7uSsIeord3RraWzZSbA2Gp3X4yfZbtRqJVsApZr7yPEHU8NfKVqkZtFW99GuR0JW/5TR1qKth7oCjKRe+4ng1uFyLEa6eMTxgFnJT9p3eo5YgkC5HG6k6EcxM6Zo3qaAcN1jwlHj6WRyBuIVh/Eoa3kSR5Tqgqikc03bbBTORRTYgLwG8z0/sYlzS/F+c8x2fxnpPZerkCNxB0mEsyKegX6V3/wCpA+6IoD20xqvimaoOAFvKKLXg1lFxc3AkoNoMla/CE05z0a2IE66TigiTzgEKCyEXEgxOKCAvy1hLrKLtDVtTPiCJUVkUngxdaoWcud5ZifMlvmTJKfPmfhBnMJU/ATqZiEYOgzuqKLliFHUm0962NsxadBKYGiKB1O8n1nmH0bbNFSuajC4pi/8AE1wPgG9RPaMIl9IPCFthFJe7b0gGLUnSJ8Xap933R0/vJ8WNM0hFnk30l4rNiaFMahVuw/GygeYyH1mbpFQwGTMu7fvBk3bPFZ8VVb7BVF/hAPzJk2AAAF95UW6nTX4eky5lWTbhd4A6tJFYOinJ9dL3ZfwniN9vjLPatdUVsjF0empUngRkym3iND49IamDUI10JDHvMTlQKNyg7yekz+3WVQqLZgNQRpoTqOe87ju9JjH5SRrJdYsAD5tw0HHiTxge1Bqp+6V9CT/7Qmm3CRbSByqeRPx/tO6JxMqoojFNBBOAGs9I7NpdqI8b+ms852eLmek9kqZaollJygk6btJhP8h+GV7cH/q6g5ED4CKQ9rWviqh+8Yo0Bs6VOwEnvARtGnYAuv6RjbaojiT0E5zYtMnGLLKR+0S/VQmdG30I1VgYCLOo+8CZDtRVOiy4XbCTM9oK+dgeEqC+QpaKY7xCqe4nxghOsLoHu+c6WZnsP0b4EJhQ5GtRmc9Acg+C385ucCfe8ZQ9k6P/AMfhyP8ASX11l3gN1/uyWNFdjzY+cNWtemSdwUn0ErtpPc+cB2/jDSwVd+IpsF6sMq/EiCQNnjeIY1XJ41HZumdix9Lw4Ydg7kmwDAb/AHb2+VxI9goGrJcaKCx/hFx8bQ5abNTU21rMX8i2YfArOfmlmjfhjiy+2fhXNJ0cNcDusdxt+kxO2FyVCl7/AFjruzAaG2l7AaeM1XZ/Fu49m5uOBuQQ3A6bx4dZktve0Wuy1GLEbieIO4g8Rp4zPhXyL5n8SKjH4lbob8BcSKkZORcEcwR8J2o5GUhnDOn8pwb5oI13ZnZqtludWIE9Wr4ihs7D2Fs7i1+Xj0E887N0lbIPHWSduffFmYiwGpmLeLBK5UVOM2LUrOaikuGJOYcYpY4vbb4anSp07A5bnS8Uz7P9GnVGcSuh426yYEWuCJXJQFx1HzhuPppkQLowLZtd4vpBxVjTZJmHMR4vyJ8pVCmRxjiX+2Y+qDsyyqOq6kGVePrhiAN1j/XwkmFpO7hC3vG385DtHIHKpcqvcueJBNz6n4SoxSJcgNoVhjoesEaFYPj5TR6JPoL6PqufAUh9kOno7S5prlzCZz6MzbBJ+Jz/APszRY2qLG0n0CnxQu4HjM99J1bJggnGpVRf9t3/APSaTCKXe/KYf6XsR/29Pxd/QBR/yMARjNlGwdt3cyX8WI/lNQaqGpTA91LqOVsoI9D8pmcMmSkL73BI4aC9j8vhJqWLCuM17AtuF7WYjW5HD5zknltnVB0kg2gTTrMNAVYjXcQ3eyt66GA9paNR3zm2UDQ5wdeQ1lltIrWdvZ73VT3tCGTn1WZnauEZHOZ0O7QPm149I+KNu7DleKohpn1hdIcIDSawuYbhxprx1M60crK7GUwXYqNCxIHK5Jt5QbIeUOroAxtzv66x9GixFxrrDtQ6L/s2WBBBtYTu2a5qOik3JYD4xYbButJaoOhJQgb0YcD1GshwqBqyHXeT6SJN0kKKXZsh2nir4hgPqKFH5xSHF4ZfaO3e7xJ1FuPDSKTouwZBqOoheLUaHxP5S2w+wUtfOCfDUyHE4dFRxYllIsb7tdQRJu2MpKi7uskyRlV93WKpV1FowCcFdaiNbQML9L2PwMqtpU8tWovJ33HhmNoX+0tKzUkk6m5v1lxIZG0KwB73lBmEnwB748x8Jp4I9/8Ao5S2DTxBPqSZZ7Ve2nlK/sBpgqZ+7eQ4/bdEYgLUYqgOrWuoJuBmtuGhN/A8AxE0BbYCllXxM8o+lGvmxirwSmt+XeJJ87AT19RuIIKkXBBuCDuII3ieFdu8Vnx1cjUAqg/hRQfjf0kjRFtNicmXdZQPElKZNuub4SLaCAFUXxZzwDMSQg58Y7D4n9wh+zmQkDUWtlYfwkL0vygtN/qg3uTc+FuXnfymSi7/AIbdlQQ9YKgJv71tDY6eR04bpR4ggvpm8bkH5C0tca4IyjcB8efylI2hmsIpGUpWF0e8fAQ5DfQeZlfRVt26Goj8x0tLJY12AL3G4WHXnLbZmG7i6bxeAUcKrjPUqJSW9je7OSLXyoN48ZcYCqlIF6dFqgAvnrNlTqKa7/OS8ZDeCWi7fvUB7gVbjhn4edoRh0CsgtY5L36x2AwzOhLAKXbO2UWGvADgIT7K4YjeLAeUFkHgz+2AQ1jOSLbNbNUMUh7LWiwfZVOnTeold2dLEZRZPO8EbGM6OXsWKgGwte24y1wmOp1kqhUFNihDKDdSeDLy6SgwhtcdYgAXB06x5ok3HG0nrpoLcxO0hqx8bQsZH7EMoJ5W6HcZVAanrLdtD4N8G4SuxCZXPrLiQyFhO4T316x5TS/pI6QIcW38OvCaIR7dsTago7OpWPeZMqjxuRMZjMSWJ1vfeeNja/S9h5ADiYzDs9OglNzdgDpwUMS2TxOuvIafWYCEGNCLzs72iq4Yhffp31QndzKH6p+B5cZmNt7GZc9cN7Wk7E5x3WR3JIWsmuQ30vfKeBO6HrC8NiGRsyGxIKnQFWU71dToyniDpE0OzE03I04aXHS9j11PrHhrazTbS2NRqgvQK0aliWou2Wm/Emi7HuH7jm3JuEx5uw03fOTQ7Jqj3GkYtLQcesnKa+BElVYxDESwtJqJv/WsSxtVuA0JHoIaDYHiDmZiOF/QTToxdadMfWszfhAlBg6F0qsfqpbzM1HZinmBqEfVCL0A1+MiTKiH4ZCdASBujqFC2YDxMJww1PWcxJyh28D8o4kSMNj7k+Ovzik/sroztoFYIDx11nJNFDtkOBUOlswyyPE91mHJjA6FYhgd1jCNo1BmzfaAPnFQyarUCngba+okeGRiLAXvrGvlawsb2F9YlxBUWGkEMmqUdCDb9JVYu5Kk775T1EO9t4EwXGajNlI3fp+cqJLGj5amXGwMAFH7Q4/ACNBu759RYeI5ylobiDxmt2HtTDOzJjCyKQmRkOVVKhgQ+ht7wIvpcvuvL0CVuiGpUubxgaahNj7OYgDFsSdwV6bE9BlJlthezGEtm9lUbgMzOp6nUD0En/WJf+UjEoZzE4lUW7eQ4npN8/ZbDuSqoUNu6Vctbdq2bwvpPL9t7OqUKz06hLMp0P2lPusPC3DhqI4zT0TLjlHYHjMSahJOnADlBkTS3jeTMukj1EbZB1b3t6SWRKTJCdbQGJ6ltBa/ygbBrnjJsQnfA5iWuA2jhqKgiia1b7/+Wp4WT63n8IgsdhqDJg6r+zfIbDORZWJ0AUn3vK8vdgACkltO6Jmts7YrVmtWqXAByouiKbcANLiXexq/7tB90SZK0OONlzReznrINoqXDKO6N5PgNZEmIGcxu2sRlSw95xlHnvMFgUslRjqWXBqSf8yoWHThFJu0rg0qaqLKgCk+NoowWilZAOIjKKB2tf3dfThJxQB3yRKYHuiIdjRTki0VG+SjTrFTQk/ruETwCyPw+GW2dreA4mC7Vu6NYAWsfQiFFWZt+n9cJFtUgIEG9mAivJVFbsTANiKi01ZVLa3bcAN5tx6T0TDdgqFgHqO5O/VUU9ABces80w1dsPXDLqVNiL2uOX5z0zYPa+k5AZgp5MQD6H8oTck7Wi4KLWdms2TsDD4dQtOmieIHePVjqT4kw7EtqFJsttw49TKt9spoQ2nA6EeohNLaNF7q9jp4G/SYt36bRTQRhnVSQtvL85kvpFwCPS9tcK6c9MycR+f95ftToE9ys662AHDwtaYvt9jw98IgIClTVc+87WuE6C4J8dOBhBOxzqm2Ya0kp01GrnS1woOp0uL290ag67x6wjZmzKjnIbKACzOxsiIguzud4AH6CV1Rrk2925tcWJF9Li5t0vp4zrOKjue50HAD0/OSIJFT3wgQQmMrixQ+J/KM2fTz1TyBLGNxlUkhRw1v4mG7KolHe+8AX84S2NaHdoKI9mpAtlPzhuyH7i/hkW01LIw8L+kZsZ7ovS0l6BZLb2lnvOYgs7AncJBi2KsviI6viRlG+4ghM52kYCgg5t8hFKfaVVqhVOVzFGCWAkKSbCSBLbjec03D+8nC5NN7n0XxMhuikrF7G2/U8uUbUq6WGg4+MZUqgd1Tcneechdxuk3eWVVBaVUAsPOV9armqjkgJ8484lQNbeErvaaO3FtIRWbBvwBxNTM5PONCXnXWxHjHJN/CCTD4mpT9x3T8LEDzA0MucF2uxNPijcyQQx80I+UpLRZZDUXtFKUlpmubt7U9kyJSKOQ2V/bOxRmNywUjXeba+szuG2s6uS5LhiWa5u1ybkgnjfh8pXOxBvHo44yoxUdIJSb2zS7V2unsVo0Tf2gD12sRuN0oi/BSMzc2yi/d1o7eMi9mN4+EekGSPVesmUCRLJQYIBuIS2RjxJlxhl77n8PylZjF7iH7x+MsaFSyk82ksCTHnuN+Eyt2BV0I5G8Nx1cZWF9bGVmxgQ+g0K68rwehxLnaNXVekGasLR2OpkkHwnKFHQ6XNogZzZyZqjNbuqthfiSYoVSXKh6D5iKUQRv+75Fz6L18YKa5AIvqd54yGpV8zxMgd5lVmqwPeraRhy0jCx+YbhKoB2WOxCAKF4k6+AnVOXU7+A/OQs9zcwQmQ45QMtuFxIkMJxwGTxvfoN35wSmZadoT2TidtOKY+0BAlcRlOSYgSNZS0JkqSdTIUMmWSxkqx8YJIjgG/LWMAzHplQHflKtbpwieqWAbKBm1sOfhBa+Oz6FTbwE62KNwAoW269z+UgdEuJp2Qs3LTxMM2TTyqoPKQJRD95mzEbhqAJdbO2a9S7XCU09+o3ujwUfWb4QYJgOOOq+ckwate6ozdFJHwEPxG0KNAfuqedt2ep3j1CbgPScw3aDEMR+9KC+5QAICeQHE0KmQ/u3ubfUbn4iKWlTbmKDhFrvqdLhTplJ5eEULQkmZt9j4hRc0X/2NAXpMujAg+ItND/jPHXv7dvjDqHbp27mJpU66nQ3UZvXf8YUh2zHFY5Et3juHxPKbSrsDDYxS+BfJUGrUHO/8DH5GY/F02VijKVKkgggggjfcQaKTBnctrOD5fOOUXNuZtEKYJJ4Q0henGUEG5uSIChhjeEEIsxHjHEGEIZIJFTkyiMQLiZCsIxI0g6SloCZIQkgQQhZIEiwvB0c0EWXuApAIDbheD0NHaeGAEgxKgMNOENZ7CB5cza8LfOSDDtibMNeqEvkWxeo32Ka7z1O4efKE7W2mKjCnTGSindRRusPrHxMM/wAjZ7PufFOU8fZU9LdCf+UzdNt8BHMYbjzjMOBa8diToJAXsukGCLHCuBiKRO7vX/2P/KKV+DrXxNME3tn/AODRSWslrQFT49I3jFFKEF4OsyMrIxVgRqDrvE2P0gUlK4asQPaVKQLtuLEDebcYooeC9MNQ98dG+UQ3CKKJjRHxgVb3z/XCKKVETJaUnWdilCIcTugaRRRrQBNOTiKKSBIk0qDuL0iigxogbd5xq7z5fKKKJEsvu0+mEwI/+ux8yw1maocYooeIfrOYr3YG/unpFFExoZsv/uU/i/4NFFFEwR//2Q=="
        sx={{ width: 56, height: 56,marginRight:5 }}
      />
      <Box sx={{display:"flex",flexDirection:"column"}}>
    <Typography >
    
Maria
     </Typography>
    <Typography sx={{color:"gray"}}>
    
Online
     
     </Typography>

    </Box>
    </Box>
  
    <Box>

        <LocalPhoneIcon sx={{marginRight:2}}/>
        <RemoveIcon/>
    </Box>

    </Box>
     <Box sx={{border:"1px solid  #816179",borderRadius:1,borderTop:'none'}}>
    <Box sx={{paddingX:{lg:10,md:6,xs:3}}}>
    <Typography sx={{margin:{lg:10,md:6}}}>
    
    Today at 11:00 am
         </Typography> 
    <Typography sx={{fontSize:13,textAlign:"left"}}>
    
   12 :00 
         </Typography> 
    <Typography sx={{border:"1px solid #816179",paddingX:5,paddingY:3,borderRadius:2,textAlign:"left",width:50}}>
    
  hEllo 
         </Typography> 
    <Typography sx={{fontSize:13,textAlign:"right"}}>
    
   12 :01 
   {/* marginLeft:{lg:120,md:100,sm:50,xs:29} */}
         </Typography> 
    <Typography sx={{backgroundColor:"#816179",color:"white",position:"absolute",right:30,paddingX:5,paddingY:3,borderRadius:2,width:50}}>
    
  Hi 
         </Typography> 
         <Typography sx={{fontSize:13,textAlign:"left"}}>
    
    12 :02
          </Typography> 
     <Typography sx={{border:"1px solid #816179",paddingX:5,paddingY:3,marginTop:7,borderRadius:2,textAlign:"left",width:110}}>
     
  How are you ?
          </Typography>
    </Box>
    <Box sx={{border:"1px solid #816179",padding:{lg:3,md:2,xs:1},margin:{lg:3,md:2,xs:1},borderRadius:2,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
<Box>
<AttachmentIcon sx={{marginRight:{lg:3,md:1,xs:0}}}/>
<TextField
         
        placeholder='write messege'
         variant="standard"
 InputProps={{
        disableUnderline: true,
      }}
          
        />
        </Box>
        <Box sx={{display:"flex",flexDirection:"row"}}>
        <AddPhotoAlternateIcon sx={{backgroundColor:"#816179",color:"white",padding:1,borderRadius:1,marginRight:1}}/>
        <Typography sx={{backgroundColor:"#816179",color:"white",padding:1,borderRadius:2,width:{lg:50,md:1}}}>
    
   send
           </Typography> 
           </Box>
           </Box>
    </Box>
    </Box>
    </>
  )
}
