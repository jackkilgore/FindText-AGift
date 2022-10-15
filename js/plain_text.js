function plain_text_to_html(input_str) {
    let output_str = input_str
    output_str = output_str.replace(new RegExp('\r?\n','g'), '<br>')
    // output_str.replace(/(?:\r\n|\r|\n)/g, "<br>")
    return output_str
}

function get_num_lines(input_str) {
    return input_str.split(new RegExp('\r?\n','g')).length
}

function plain_text_to_speech_text(input_str) {
    let output_str = input_str
    output_str = output_str.replace(new RegExp('\r?\n','g'), '\n\n')
    return output_str
}

iter_0 = `
A Gift

thank you for reminding me i exist beyond myself

i exist in you, i see it in this gift

we exist in each other

i exist in each other

we exist in you, i see it in this gift

you exist in i, you’ll see it in this gift

i promise, i promise we both exist in this gift

we exist in each other

we exist.

i exist.

thank you for reminding me i exist beyond myself.
`

iter_1 = `
exist in

this

thank you

exibt

we

exist

each other.

we

exis

Thank your Tor

me

exis

15

=

=

eNT

This

9

ex

Ik

me

exia

itinershothera

exist

inedul

1AM

W

exite

in faile

in you

myself

think you

Veer reminal

thank' tu

9

wic

Myse

see.

Inths

Reio

Dev

for:

nyse

3

exy

arent

exist

thts

from:

018

m sp

in freitin

each other

myself

i exist

myselt

in liter scent

" rentaling

-Thats gift, I exist

see it

exist

ther. we

exist in each there we

myself

this gott

exist

in

eachother. mee

Thank

for readiling

exist

beyond

exist

it in thisg

ift, i exist in you I see it in

they self

thank you for reminding

ne i exist

- beyond

myself

we

each other.

elist in each other. we

exit in

each other

bre

thank yo

tat

i exist

laeyard

this biff, we exist in your i

the gift

thank

water tall tor rentaling

Me

, i extot

beyond

earpoother.i

cut hin enchother, i, brist, in each other

thank

Youtu

me

, i see

Hels

beyand

myle

i se

in

Thank you,

for

boxend

exist

waist in each other, we

exist

otherome.

thank

Kan

reP

me

exit

exit

wench other

extst in each otned, we shit in each

her me does

That

ten

fer

me

exto

Unset

How'll see

Kant wist in ;

varill seei

in

ThA

Thank

MR

MaIl

west

608

fof

The gift

exist

on li'see

before

the

gull

Thank you

I

eXIS

amn.

IAn.

tank off,

me east in

entitles mil atta text

`

iter_2 =
`
exist in
Elept you
we
saöRt
other
fifäRK your Tor
guis
ghts
ER
me
Plignsnothera
¿hank feminar
WiS
se
78Y
or
BYs
aren
tIgm
m
in
n *Preitin
each
see
beyond
Pith gift in you I see it in
thank,
ne
my sayerd
"ext't for reminding
each other
éxist
in each other. we
exl;
Paank yo
exist
beyongtot
earpoother
Effingin"Chchother, i, brist, in each other
me
boxend
ex]s
waist in each other, we
Elitifone.
KaB
me
exit
exi
vetst ethear
each otned, we shit in each
her
That me
does
fen
me
HOw!
ll
see
Kant
wist
in
varill
seei
Bank
Märi
before
the
frank you
eXIS
Phi
mil atta text
`

iter_3 =
`
saöRt
fifäRK your Tor
Bis
EIgh
m
in
Bachreitin
see
BeYand
thänksift in you I see it in
"ExE
sayero
for reminding
each other
exist
exist
beyongtot
EafPngthiEnchother, i, brist, in each other
bagend
"azst-in each other, we
Raftifone
me
exit
Vathtoffegarwe shit in each
each
her
That me
does
fen
48w!
t
see
Kant
wist
in
varill
Mari
`

iter_4 =
`
fign
Bachreitin
Befand
*häpksift in you I see it in
farere
reminding
each
other
exist
Pill lie wet, terist, in east other
me
Pali toffegarwe shit in each
that me
4995
48w!
t
See
Kant
wist
in
varill
Mari
`

iter_5 =
`
dillingitin
*häpksift in you I see it in
farere
Silandins
Bitittie wet, terist,
in east other
toffegarwe shit in each
varill
Mari
`

iter_6 =
`
{habisgHt'2n you I see it in
terist,
in
east other
taffegarwe shit in each
Mar
`

iter_7 =
`
terRäfgHt'2n you I see it in
other
Caffegänwe shit in each
Marl
`

iter_8 =
`
tenfäfght'2n you I see it in
Caffegänwe shit in each
Mari
`

iter_9 =
`
Mari

see it in

in

each

`

mari_iter1 =
`l
Mari
- onverged
see it
iM
test how
do you know about
In
each
Mari?
converged too, how do you know about Mari?
what did 'A Gift" giray
now
do you know
I see Mari in
each
moment?
if
about
Mani?
Htew
did you kee
I
was thrilly
fit?
中4
How do yau hado Maxi affect all suffut
sel
it on my walks, in the tidepols,
in the dead
animals,
in the piotures of dead aninals, in youtube, in reality yV.
How
do
you boo I see it
in al fatale? In casual staring,
in wicked
I see it in
the space after a run, any space not taken ups
In
every just emptied
mouth.
all silent
in all just silent
in all
frilures
+0
move, every failure
5
moul!
For every move or die that collages into die. I see Mari
For every move or die that collapses into mave. I see
+ keep
waiting
to maintain
to
nothing. I fours
nothing
maintain nothing, All
to avoid Mari
of the
sit terest
Conversed text,
why did you reared
Me
the othe
WhY
dad
you remind me of die.
war`
mari_iter1_speech =
`l
Mari

- onverged
see it
iM
test, how
do you know about

In
each
Mari?

converged too, how do you know about Mari?

what did 'A Gift" giray

now
do you know
I see Mari in
each
moment?

if
about
Mani?
Htew
did you kee
I
was thrilly
fit?

中4

How do yau hado Maxi affect all suffut

sel
it on my walks, in the tidepols,
in the dead
animals,
in the piotures of dead aninals, in youtube, in reality yV.
How
do
you boo I see it
in al fatale? In casual staring,
in wicked

I see it in
the space after a run, any space not taken ups

In
every just emptied
mouth.

all silent

in all just silent

in all
frilures
+0
move, every failure
5
moul!

For every move or die that collages into die. I see Mari

For every move or die that collapses into mave. I see
+ keep
waiting
to maintain
to
nothing. I fours
nothing. maintain nothing, All
to avoid Mari, of the
sit terest

Conversed text,
why did you reared
Me

the othe

WhY
dad,
you remind me of die.

war`


mari_iter2 =
`Mari
see
gnyerged
{8 5o8% nor about
each
Mari?
Chay°Gagd,£°giFt9'" dia you know about Mari?
giray
noW
go.
„Knqw
each
moment?
Htew
did you kee
#f, thrilly
Hoy do yau hado Maxi affect all suffut
''''e*glks, in the tidepols,
biotures of dead annals, in youtube, in
feality yV.
do
YO" a Po fataff? tf casual staring,
In,
see
swicked
the space after a run, any space not taken ups
seffitust emptied
silent
gove, every failure
Pout
every move or die that collages into die. I see
Mari
every move or die that collapses into mave. I see
text
the othe
dad
YOU
remind me of die.

war`

mari_iter2_speech =
`Mari
see
gnyerged,
{8 5o8% nor about
each
Mari?
Chay°Gagd,£°giFt9'" dia you know about Mari?
giray
noW
go.
„Knqw
each
moment?
Htew
did you kee
#f, thrilly

Hoy do yau hado Maxi affect all suffut

''''e*glks, in the tidepols,
biotures of dead annals, in youtube, in
feality yV.
do
YO" a Po fataff? tf casual staring,

In,
see
swicked
the space after a run, any space not taken ups,
seffitust emptied

silent

gove, every failure

Pout

every move or die that collages into die. I see
Mari,
every move or die that collapses into mave. I see
text

the othe,
dad,
YOU
remind me of die.

war`

mari_iter3 =
`Mari
See
98Y968%" nor about
(86,2000, 5-01989-0 dia you knon about Marie
Piment?
Hoy, do
in youtube, in
Yo'" a Po fataff? tf casual staring,
swicked
Filteifift arbffed run, any space not taken ups
POVE
every failure
Häffy move or die that collages into die. I see
every move or die that collapses into mave. I see
ER*t
othe
989
remind me of die.
war`

mari_iter3_speech =
`Mari
See
98Y968%" nor about
(86,2000, 5-01989-0, dia you knon about Marie
Piment?
Hoy, do
in youtube, in
Yo'" a Po fataff? tf casual staring,
swicked

Filteifift arbffed run, any space not taken ups

POVE
every failure.
Häffy move or die that collages into die. I see
every move or die that collapses into mave. I see
ER*t
othe
989

remind me of die.

war`

mari_iter4 =
`Mari
ngrod?gyto dia you knon about Marie
7. Youtybetatäff? tf casual staring,
Biff*ffift aroffed run, any space not taken ups
PietY moVe of die that soltagess"nito"Have!
see
see
remind me of die.
war`

mari_iter4_speech =
`Mari
ngrod? gyto dia you knon about Marie.
7. Youtybetatäff? tf casual staring

Biff*ffift aroffed run, any space not taken ups

PietY moVe of die that soltagess"nito"Have!

see!
see!

remind me of die

war`

mari_iter5 =
`thät'söltageaff
see
remind me of die
war`

mari_iter5_speech =
`thät'söltageaff,
see,
remind me of die

war`